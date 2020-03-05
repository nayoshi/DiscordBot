// API provided by Abrahan Nevarez https://abrahannevarez.dev/
const fetch = require('node-fetch')
const Discord = require('discord.js')
const fs = require('fs')

const petJSON = require('../constants/pets')
const { doggoTime } = require('../constants/config')

module.exports = async function (command) {
  const { args, message } = command
  const embed = new Discord.RichEmbed()
    .setColor('#55555')
  if (args.length === 0) {
    const breedData = await requestBreedData()
    var list = ''
    await breedData.forEach((item, index) => {
      list += titleCase(item) + '\n'
    })
    embed.addField('**Dog Breeds**', list)
    embed.setFooter('Send an email to admin@gofetch.pictures for suggestion of breeds')
  } else {
    // embed.setImage('https://breedcnd.azureedge.net/shibainu/shiba-inu_4861.jpg')
    const dogImages = await getDoggoData(args.join(' '))
    if (!dogImages) {
      message.channel.send('Invalid doggo breed. :(( try again')
      return
    }
    dogImages.forEach((item) => {
      embed.setImage(item.imageURL)
      embed.setFooter(item.sourceURL)
    })
  }
  message.channel.send({ embed })
}
async function getDoggoData (breed) {
  const url = 'http://gofetch.pictures:5000/breeds/?breed='
  breed = breed.toLowerCase()
  if (petJSON.dog.breeds.includes(breed)) {
    const response = await fetch(url + breed, { method: 'post' })
    const resJson = await response.json()
    const dogImages = []
    await Object.keys(resJson).forEach(async (dogBreed, index) => {
      await resJson[dogBreed].forEach((imageData) => {
        dogImages.push(imageData)
      })
    })
    return dogImages
  } else {
    return null
  }
}
async function requestBreedData () {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const currentTime = (new Date()).getTime()
    // Accesses the garage file to be able to write in to it
    const doggoFile = 'constants/pets.json'
    if (petJSON.dog.nextCache < currentTime) {
      const response = await fetch('http://gofetch.pictures:5000/dogs/', { method: 'post' })
      const body = await response.text()
      const breeds = body.split('\n')
      breeds.shift()
      breeds.pop()
      const dog = []
      await breeds.forEach((item, index) => {
        dog.push(item.substring(1).toLowerCase())
      })

      petJSON.dog.breeds = dog
      petJSON.dog.nextCache = currentTime + doggoTime
      fs.writeFile(doggoFile, JSON.stringify(petJSON, null, 2), (err) => {
        if (!err) {
          resolve(dog)
        }
      })
    } else {
      resolve(petJSON.dog.breeds)
    }
  })
}
function titleCase (str) {
  var splitStr = str.toLowerCase().split(' ')
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }
  // Directly return the joined string
  return splitStr.join(' ')
}

module.exports.permission = ''

module.exports.use = ''

module.exports.description = 'This is an example command. It does not do anything.'
