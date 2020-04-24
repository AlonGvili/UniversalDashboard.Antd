import React, { useEffect } from 'react'
// was take from stackoverflow.com
// https://stackoverflow.com/questions/37374896/in-javascript-what-would-be-the-simplest-function-to-get-the-namespace-of-a-mult?answertab=active#tab-top
export const getPath = object => {
  const iter = (o, p) => {
    Array.isArray(o)
      ? o.forEach((a, i) => iter(a, p.concat(i)))
      : typeof o === "object"
      ? Object.keys(o).forEach(k => iter(o[k], p.concat(k)))
      : null;
    path.push(p.join("."));
  };

  var path = [];
  iter(object, []);
  return path;
};

export const getValue = (object, path) => {
  return path.split(".").reduce(function(r, a) {
    return Array.isArray(r) || typeof r === "object" ? r[a] : undefined;
  }, object);
};

export function guid() {
	return "xxxxxxxx".replace(/[xy]/g, function (c) {
		// eslint-disable-next-line no-bitwise
		var r = (Math.random() * 16) | 0 // eslint-disable-next-line no-bitwise

		var v = c === "x" ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}