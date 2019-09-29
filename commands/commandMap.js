const ping = require('./ping')
const stats = require('./stats')
const ban = require('./ban')
const kick = require('./kick')
const purge = require('./purge')
const mute = require('./mute')
const unmute = require('./unmute')
const help = require('./help')
const whois = require('./whois')
module.exports = {
  ping: ping,
  stats: stats,
  kick: kick,
  ban: ban,
  purge: purge,
  mute: mute,
  unmute: unmute,
  help: help,
  whois: whois
}
