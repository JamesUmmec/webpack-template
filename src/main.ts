import * as $ from "jquery"

// those are just templates.
// delete those and add your code.

onload = () => {
	setInterval(() => {
		$("#now").text((new Date()).toLocaleString())
	}, 10)
}
