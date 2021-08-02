var time = moment();
$('currentDay').text(time.format('MMM Do YYYY, h:mm:ss a'));
var currentTime = moment().hour();

var nineAm = $('#9am-text');
nineAm = 9;
var tenAm = $('#10am-text');
nineAm = 10;
var elevenAm =$('#11am-text');
nineAm = 11;

var twelvePm = $('#12pm-text');
nineAm = 12;
var onePm = $('#1pm-text');
nineAm = 1;
var twoPm = $('#2pm-text');
nineAm = 2;
var threePm = $('#3pm-text');
nineAm = 3;
var fourPm= $('#4pm-text');
nineAm = 4;
var fivePm = $('#5pm-text');
nineAm = 5;
var sixPm = $('#6pm-text');
nineAm = 6;

if (localStorage.getItem("9")) {
    $("#9am-text").text(localStorage.getItem("9"));
  }
  if (localStorage.getItem("10")) {
    $("#10am-text").text(localStorage.getItem("10"));
  }
  if (localStorage.getItem("10")) {
    $("#11am-text").text(localStorage.getItem("11"));
  }
  if (localStorage.getItem("12")) {
    $("#12pm-text").text(localStorage.getItem("12"));
  }
  if (localStorage.getItem("1")) {
    $("#1pm-text").text(localStorage.getItem("1"));
  }
  if (localStorage.getItem("2")) {
    $("#2pm-text").text(localStorage.getItem("2"));
  }
  if (localStorage.getItem("3")) {
    $("#3pm-text").text(localStorage.getItem("3"));
  }
  if (localStorage.getItem("4")) {
    $("#4pm-text").text(localStorage.getItem("4"));
  }
  if (localStorage.getItem("5")) {
    $("#5pm-text").text(localStorage.getItem("5"));
  }
  
  if (currentTime > nineAm) {
    $("#9am-text").addClass("past");
  } else if (currentTime == nineAm) {
    $("#9am-text").addClass("present");
  } else if (currentTime < nineAm) {
    $("#9am-text").addClass("future");
  }
  
  if (currentTime > tenAm) {
    $("#10am-text").addClass("past");
  } else if (currentTime === tenAm) {
    $("#10am-text").addClass("present");
  } else if (currentTime < tenAm) {
    $("#10am-text").addClass("future");
  }
  if (currentTime > elevenAm) {
    $("#11am-text").addClass("past");
  } else if (currentTime === elevenAm) {
    $("#11am-text").addClass("present");
  } else if (currentTime < elevenAm) {
    $("#11am-text").addClass("future");
  }
  if (currentTime > twelvePm) {
    $("#12pm-text").addClass("past");
  } else if (currentTime === twelvePm) {
    $("#12pm-text").addClass("present");
  } else if (currentTime < twelvePm) {
    $("#12pm-text").addClass("future");
  }
  if (currentTime > onePm) {
    $("#1pm-text").addClass("past");
  } else if (currentTime === onePm) {
    $("#1pm-text").addClass("present");
  } else if (currentTime < onePm) {
    $("#1pm-text").addClass("future");
  }
  if (currentTime > twoPm) {
    $("#2pm-text").addClass("past");
  } else if (currentTime === twoPm) {
    $("#2pm-text").addClass("present");
  } else if (currentTime < twoPm) {
    $("#2pm-text").addClass("future");
  }
  if (currentTime > threePm) {
    $("#3pm-text").addClass("past");
  } else if (currentTime === threePm) {
    $("#3pm-text").addClass("present");
  } else if (currentTime < threePm) {
    $("#3pm-text").addClass("future");
  }
  if (currentTime > fourPm) {
    $("#4pm-text").addClass("past");
  } else if (currentTime === fourPm) {
    $("#4pm-text").addClass("present");
  } else if (currentTime < fourPm) {
    $("#4pm-text").addClass("future");
  }
  if (currentTime > fivePm) {
    $("#5pm-text").addClass("past");
  } else if (currentTime === fivePm) {
    $("#5p-text").addClass("present");
  } else if (currentTime < fivePm) {
    $("#5p-text").addClass("future");
  }
  
  $(".saveBtn").click(function (event) {
    console.log("you clicked saved");
    var descriptionStored = $(this).siblings(".description").val();
    var nineAmStored = $(this).attr("data");
    localStorage.setItem(nineAmStored, descriptionStored);
  });
  $(".saveBtn").click(function (event) {
    console.log("you clicked saved");
    var descriptionStored = $(this).siblings(".description").val();
    var tenAmStored = $(this).attr("data");
    localStorage.setItem(tenAmStored, descriptionStored);
  });
  $(".saveBtn").click(function (event) {
    console.log("you clicked saved");
    var descriptionStored = $(this).siblings(".description").val();
    var elevenAmStored = $(this).attr("data");
    localStorage.setItem(elevenAmStored, descriptionStored);
  });
  $(".saveBtn").click(function (event) {
    console.log("you clicked saved");
    var descriptionStored = $(this).siblings(".description").val();
    var twelvePmStored = $(this).attr("data");
    localStorage.setItem(twelvePmStored, descriptionStored);
  });
  $(".saveBtn").click(function (event) {
    console.log("you clicked saved");
    var descriptionStored = $(this).siblings(".description").val();
    var nineAmStored = $(this).attr("data");
    localStorage.setItem(nineAmStored, descriptionStored);
  });
  $(".saveBtn").click(function (event) {
    console.log("you clicked saved");
    var descriptionStored = $(this).siblings(".description").val();
    var onePmStored = $(this).attr("data");
    localStorage.setItem(onePmStored, descriptionStored);
  });
  $(".saveBtn").click(function (event) {
    console.log("you clicked saved");
    var descriptionStored = $(this).siblings(".description").val();
    var twoPmStored = $(this).attr("data");
    localStorage.setItem(twoPmStored, descriptionStored);
  });
  $(".saveBtn").click(function (event) {
    console.log("you clicked saved");
    var descriptionStored = $(this).siblings(".description").val();
    var threePmStored = $(this).attr("data");
    localStorage.setItem(threePmStored, descriptionStored);
  });
  $(".saveBtn").click(function (event) {
    console.log("you clicked saved");
    var descriptionStored = $(this).siblings(".description").val();
    var fourPmStored = $(this).attr("data");
    localStorage.setItem(fourPmStored, descriptionStored);
  });
  $(".saveBtn").click(function (event) {
    console.log("you clicked saved");
    var descriptionStored = $(this).siblings(".description").val();
    var fivePmStored = $(this).attr("data");
    localStorage.setItem(fivePmStored, descriptionStored);
  });