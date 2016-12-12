let result = document.getElementById('result')

let map = new WeakMap()

export class EventTarget {
	constructor () {
		map.set(this, {
			listeners: {}
		})
	}

	addListener(type, fn) {
		let listeners = map.get(this).listeners

		if (!listeners[type]) {
			listeners[type] = []
		}

		listeners[type].push(fn)
	}

	fireEvent(type, eventObj) {
		if (!type) {
			throw new Error("Need to know the type.")
		}

		if (!eventObj) {
			eventObj = {}
		}

		if (!eventObj.type) {
			eventObj.type = type
		}

		if (!eventObj.target) {
			eventObj.target = this
		}

		let listeners = map.get(this).listeners[type]

		if (!listeners) {
			return
		}

		listeners.forEach(function (item) {
			item(eventObj)
		})
	}

	removeListener(type, fn) {
		let listeners = map.get(this).listeners[type]

		if (!listeners) {
			return
		}

		let index = listeners.indexOf(fn)

		while	(index > -1) {
			listeners.splice(index, 1)

			index = listeners.indexOf(fn)
		}
	}
}



result.innerHTML += "<code><pre>let map = new WeakMap()<br><br>\
export class EventTarget {<br>\
  constructor () {<br>\
    map.set(this, {<br>\
      listeners: {}<br>\
    })<br>\
  }<br><br>\
  addListener(type, fn) {<br>\
    let listeners = map.get(this).listeners<br><br>\
    if (!listeners[type]) {<br>\
      listeners[type] = []<br>\
    }<br><br>\
    listeners[type].push(fn)<br>\
  }<br><br>\
  fireEvent(type, eventObj) {<br>\
    if (!type) {<br>\
      throw new Error('Need to know the type.')<br>\
    }<br><br>\
    if (!eventObj) {<br>\
      eventObj = {}<br>\
    }<br><br>\
    if (!eventObj.type) {<br>\
      eventObj.type = type<br>\
    }<br><br>\
    if (!eventObj.target) {<br>\
      eventObj.target = this<br>\
    }<br><br>\
    let listeners = map.get(this).listeners[type]<br><br>\
    if (!listeners) {<br>\
      return<br>\
    }<br><br>\
    listener.forEach(function (item) {<br>\
      item(eventObj)<br>\
    })<br>\
  }</br><br>\
  removeListener(type, fn) {<br>\
    let listeners = map.get(this).listeners[type]<br><br>\
    if (!listeners) {<br>\
      return<br>\
    }<br><br>\
    let index = listeners.indexOf(fn)<br><br>\
    while	(index > -1) {<br>\
      listeners.splice(index, 1)<br><br>\
      index = listeners.indexOf(fn)<br>\
    }<br>\
  }<br>\
}\
</pre></code>"

result.innerHTML += '<p>In another JS file, we will use the class EventTarget:</p>'

result.innerHTML += '<code><pre>import {EventTarget} from "js/eventtarget.js"<br><br>\
let listener1 = function (e) {<br>\
  console.log(e.type);<br>\
}<br><br>\
let listener2 = function (e) {<br>\
  console.log(e.target)<br>\
}<br><br>\
let evt = new EventTarget()<br>\
evt.addListener("load", listener1)<br>\
evt.addListener("load", listener2)<br><br>\
evt.fireEvent("load")<br><br>\
evt.removeListener("load", listener1)<br>\
evt.removeListener("load", listener2)<br><br>\
evt.fireEvent("load")<br>\
</pre></code>'

result.innerHTML += '<p>If you look in the console, you will see<br>\
load and EventTarget {} or [object Object] if you do an alert</p>'
