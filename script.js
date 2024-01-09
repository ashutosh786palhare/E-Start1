// script.js

// Function to display current time and date
function updateTime() {
    const now = new Date();
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const timeString = now.toLocaleString('en-US', options);
    const dateString = now.toDateString();
    timeElement.textContent = `Time: ${timeString}`;
    dateElement.textContent = `Date: ${dateString}`;
}

// Update time on page load
updateTime();

// Update time every second
setInterval(updateTime, 1000);


// Function to handle Google search
function googleSearch() {
    const googleSearchBar = document.querySelector('.google-search');
    const searchTerm = googleSearchBar.value;
    if (searchTerm) {
        const googleSearchURL = `https://www.google.com/search?q=${searchTerm}`;
        window.open(googleSearchURL, '_blank');
    }
}

// Function to handle DuckDuckGo search
function duckDuckGoSearch() {
    const duckDuckGoSearchBar = document.querySelector('.duckduckgo-search');
    const searchTerm = duckDuckGoSearchBar.value;
    if (searchTerm) {
        const duckDuckGoSearchURL = `https://duckduckgo.com/?q=${searchTerm}`;
        window.open(duckDuckGoSearchURL, '_blank');
    }
}

// Add event listeners to search bars
const googleSearchBar = document.querySelector('.google-search');
googleSearchBar.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        googleSearch();
    }
});

const duckDuckGoSearchBar = document.querySelector('.duckduckgo-search');
duckDuckGoSearchBar.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        duckDuckGoSearch();
    }
});


$(document).ready(function(){
 			$("ul.osx-dock li").each(function (type) {
		     	$(this).hover(function () {
		      		$(this).prev("li").addClass("nearby");
		      		$(this).next("li").addClass("nearby");
		     	},
		     	function () {
		      		$(this).prev("li").removeClass("nearby");
		      		$(this).next("li").removeClass("nearby");
		     	});
		    });
		});
		