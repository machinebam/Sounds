$(function() {

// Variables
body = $('body');


// Kick drum varibles
	kickDrumAll = $('#Kick');
	kickAudio = $('#Kick-Audio');

	//Kick drum timeline
	var kicktl = new TimelineMax({
		paused: true
	});
	kicktl.to(body, 0.1, {css:{background:"#ff77d9"}, ease:Elastic.easeIn})
	.to(kickDrumAll, 0.1, {scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut})
	.to(kickDrumAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut})
	;

	// Kick play
	window.kick = function(){
		kicktl.restart();
		kicktl.play();
		var kickAudioEl = kickAudio.get(0);
		kickAudioEl.currentTime = 0;
		kickAudioEl.play();
	}

	// Do the kick stuff when clicked/touched
	var clickTouchKickDone = false;
	kickDrumAll.on("touchstart click", function() {
		if(!clickTouchKickDone) {
			clickTouchKickDone = true;
			setTimeout(function() {
				clickTouchKickDone = false;
			}, 100);
			kick();
			return false;
		}
	});

// Hi-hat varibles
	hiHatAll = $('#Hi-Hat');
	hiHatTop = $('#Hi-Hat-Top');
	hiHatBottom = $('#Hi-Hat-Bottom');
	hiHatClosedAudio = $('#Hi-Hat-Closed-Audio');
	

	var kicktl2 = new TimelineMax({
		paused: true
	});
	
	kicktl2.to(body, 0.1, {css:{background:"#d58cff"}, ease:Elastic.easeIn})
	.to(hiHatAll, 0.1, {scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut})
	.to(hiHatAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

	// Hi-hat play
	window.hiHat = function() {
		kicktl2.restart();
		kicktl2.play();
		var hiHatClosedAudioEl = hiHatClosedAudio.get(0);
		hiHatClosedAudioEl.currentTime = 0;
		hiHatClosedAudioEl.play();
	}

	// Do the hi-hat stuff when clicked/touched
	var clickTouchHitHatDone = false;
	hiHatAll.on("touchstart click", function() {
		if(!clickTouchHitHatDone) {
			clickTouchHitHatDone = true;
			setTimeout(function() {
				clickTouchHitHatDone = false;
			}, 100);
			hiHat();
			return false;
		}
	});


// Snare drum varibles
snareDrumAll = $('#Snare');
snareDrum = $('#Snare-Drum');
snareAudio = $('#Snare-Audio');


//Kick drum timeline
var snarePush = new TimelineMax({
	paused: true
});
snarePush.to(body, 0.1, {css:{background:"#77ffef"}, ease:Elastic.easeIn})
.to(snareDrumAll, 0.1, {scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut})
.to(snareDrumAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});


	// Snare play
	window.snare = function(){
		snarePush.restart();
		snarePush.play();
		var snareAudioEl = snareAudio.get(0);
		snareAudioEl.currentTime = 0;
		snareAudioEl.play();
	}

	// Do the snare stuff when clicked/touched
	var clickTouchSnareDone = false;
	snareDrumAll.on("touchstart click", function() {
		if(!clickTouchSnareDone) {
			clickTouchSnareDone = true;
			setTimeout(function() {
				clickTouchSnareDone = false;
			}, 100);
			snare();
			return false;
		}
	});


// Crash varibles
	crashCymbolAll = $('#Crash');
	crashCymbol = $('#Crash-Cymbol');
	crashAudio = $('#Crash-Audio');


	// Crash play
	window.crash = function() {
		
		var crashAudioEl = crashAudio.get(0);
		crashAudioEl.currentTime = 0;
		crashAudioEl.play();
	}

	// Do the crash stuff when clicked/touched
	var clickTouchCrashDone = false;
	crashCymbolAll.on("touchstart click", function() {
		if(!clickTouchCrashDone) {
			clickTouchCrashDone = true;
			setTimeout(function() {
				clickTouchCrashDone = false;
			}, 100);
			crash();
			return false;
		}
	});

	// Right tom drum varibles - keyboard Y
	rightTomDrumAll = $('#Tom-Right-All');
	rightTomDrum = $('#Tom-Right-Drum');
	smallTomAudio = $('#Small-Rack-Tom-Audio');



	// Right tom play
	window.rightTom = function() {

		var smallTomAudioEl = smallTomAudio.get(0);
		smallTomAudioEl.currentTime = 0;
		smallTomAudioEl.play();
	}

	// Do the right tom stuff when clicked/touched
	var clickTouchRTDrumDone = false;
	rightTomDrumAll.on("touchstart click", function() {
		if(!clickTouchRTDrumDone) {
			clickTouchRTDrumDone = true;
			setTimeout(function() {
				clickTouchRTDrumDone = false;
			}, 100);
			rightTom();
			return false;
		}
	});

	// Left tom drum varibles
	leftTomDrumAll = $('#Tom-Left-All');
	leftTomDrum = $('#Tom-Left-Drum');
	bigTomAudio = $('#Big-Rack-Tom-Audio');


	// Left tom play
	window.leftTom = function(){
		var bigTomAudioEl = bigTomAudio.get(0);
		bigTomAudioEl.currentTime = 0;
		bigTomAudioEl.play();
	}

	// Do the left tom stuff when clicked/touched
	var clickTouchLTDrumDone = false;
	leftTomDrumAll.on("touchstart click", function() {
		if(!clickTouchLTDrumDone) {
			clickTouchLTDrumDone = true;
			setTimeout(function() {
				clickTouchLTDrumDone = false;
			}, 100);
			leftTom();
			return false;
		}
	});

	// Floor tom drum varibles
	floorTomDrumAll = $('#Floor-Tom');
	floorTomAudio = $('#Floor-Tom-Audio');


	// Floor tom play
	window.floorTom = function(){
		var floorTomAudioEl = floorTomAudio.get(0);
		floorTomAudioEl.currentTime = 0;
		floorTomAudioEl.play();
	}

	// Do the floor tom stuff when clicked/touched
	var clickTouchTDrumDone = false;
	floorTomDrumAll.on("touchstart click", function() {
		if(!clickTouchTDrumDone) {
			clickTouchTDrumDone = true;
			setTimeout(function() {
				clickTouchTDrumDone = false;
			}, 100);
			floorTom();
			return false;
		}
	});




	// Key triggers
	document.onkeydown = function(e) {
		thisKeyID = 'Key-' + e.keyCode;
		thisKey = $('#' + thisKeyID);
		switch (e.keyCode) {
			case 50://number 2
			hiHat();
			animateKey(thisKey);
			break;
			case 51://number 3
			snare();
			animateKey(thisKey);
			break;
			case 49: //number 1
			kick();
			animateKey(thisKey);
			break;
			case 71:
			floorTom();
			animateKey(thisKey);
			break;
			case 70:
			crash();
			animateKey(thisKey);
			break;
			case 84:
			leftTom();
			animateKey(thisKey);
			break;
			case 89:
			rightTom();
			animateKey(thisKey);
			break;
		}
	};





	// Load audio on iOS devices on the first user interaction, because...
	$('#sequencer-visible-btn').one('click', function() {
		$("audio").each(function(i) {
			this.play();
			this.pause();
		});
	});

});
