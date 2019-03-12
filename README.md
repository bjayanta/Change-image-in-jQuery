# How to show image on-change event using ES6/jQuery?
Just follow the step bellow:
1.  Initialize a empty FileReader
2.  select the image on-change event
3.  Read the selected file and set as data-url into reader
4.  Set the reader result into DOM using FileReader on load event

## Using Javascript(ES6):
```javascript
// Initialize a empty FileReader
var reader = new FileReader();

// select the image 'on change' event
document.getElementById("change-img").addEventListener("change", (ev) => {
    // get the file
	var file = ev.target.files[0];

    // set the file as data-url
	if(file) {
		reader.readAsDataURL(file);
	}

    // set the result reader on-load event
	reader.addEventListener("load", () => {
        // set the reader result into dom
		document.getElementById("profile-pic").setAttribute('src', reader.result);
	});
});
```

## Using jQuery(>=3.1.1)
```javascript
// Initialize a empty FileReader
var reader  = new FileReader();

// select the image 'on change' event
$("#change-img").on('change', function(ev) {
    // get the file
    var file = ev.target.files[0];

    // set the file as data-url
    if(file) {
        reader.readAsDataURL(file);
    }

    // set the result reader on-load event
    $(reader).on('load', function() {
        // set the reader result into dom
        $("#profile-pic").attr({
            src: reader.result
        });
    });
});
```