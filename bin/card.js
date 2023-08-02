#!/usr/bin/env node
"use strict";
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk from "chalk";
import boxen from "boxen";
import gs from "gradient-string";

// Some sweet ascii art
import avatar from "../art/avatar.js";

// define custom colors
const pink = "#ff1675";
const orange = "#ff7b01";
const inkyBlue = "#130f25";
const yellow = "#ffc942";
const blue = "#00A3FF";
const green = "#02e088";
const lightBlue = "#99DAFF";

// set up chalk and gradients
const yellowChalk = chalk.hex( yellow );
const lbChalk = chalk.hex( lightBlue  );
const blueChalk = chalk.hex( blue );
const greenChalk = chalk.hex( green  );
const orangeChalk = chalk.hex( orange );
// const pinkChalk = chalk.hex( pink );
const ps = gs( pink, orange );
const newline = "\n";

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round",
	borderColor: pink,
	backgroundColor: inkyBlue
};

// Text + chalk definitions
const data = {
	name: yellowChalk.bold( "                                           J.D. Hillen" ),
	handle: yellowChalk( "jdhillen" ),
	work: ps( "Software Engineer II @ Garmin" ),
	workUrl: ps( "https://garmin.com" ),
  github: yellowChalk( "https://github.com/jdhillen" ),
  linkedin: yellowChalk( "https://www.linkedin.com/in/jdhillen/" ),
  facebook: yellowChalk( "https://www.facebook.com/jdhillen/" ),
  instagram: yellowChalk( "https://www.instagram.com/jdhillen/" ),
	twitter: yellowChalk( "https://twitter.com/jdhillen/" ),
	mastodon: yellowChalk( "https://mastodon.social/@jdhillen" ),
	bluesky: yellowChalk( "https://bsky.app/profile/jdhillen.com"),
	threads: yellowChalk( "@jdhillen"),
	web: yellowChalk( "https://jdhillen.com" ),
  links: yellowChalk( "https://links.jdhillen.com" ),
	email: yellowChalk( "jhillen01@gmail.com" ),
	npx: orangeChalk( "npx jdhillen" ),
	labelWork: blueChalk( "        Work:" ),
	labelWorkUrl: blueChalk( "             " ),
  labelGitHub: blueChalk( "      GitHub:" ),
  labelLinkedIn: blueChalk( "    LinkedIn:" ),
  labelFacebook: blueChalk( "    Facebook:" ),
  labelInstagram: blueChalk( "   Instagram:" ),
	labelTwitter: blueChalk( "     Twitter:" ),
	labelMastodon: blueChalk( "    Mastodon:" ),
	labelBluesky: blueChalk( "     BlueSky:" ),
	labelThreads: blueChalk( "     Threads:" ),
	labelWeb: blueChalk( "         Web:" ),
  labelLinks: blueChalk( "       Links:" ),
	labelCard: blueChalk( "        Card:" ),
	labelEmail: blueChalk( "       Email:" ),
	bio: lbChalk( `Hailing from the heart of Kansas City’s Silicon Prairie, J.D. Hillen is a Software Engineer II at
GPS and wearables company, Garmin. Since the age of 15, he's been fascinated with the connection
between creativity and code. His love for all things tech has allowed him to work for a wide variety
of advertising agencies, marketing firms and even the craft beer industry. When he’s not coding,
you’ll find him spending time with his wife and two boys or in the pit of a metal show. ` ),
	msg: greenChalk( `I love the developer community! If there's anything I can help you with, reach out anytime! You can
reach me by email or my Twitter / LinkedIn DMs are always open!` )
};

// Actual strings we're going to output
const hr = ps( "<==================================================================================================>" );
const heading = data.name;
const working = `\n${ data.labelWork }  ${ data.work }`;
const workingUrl = `${ data.labelWorkUrl }  ${ data.workUrl }`;
const githubing = `\n${ data.labelGitHub }  ${ data.github }`;
const linkedining = `${ data.labelLinkedIn }  ${ data.linkedin }`;
const facebooking = `${ data.labelFacebook }  ${ data.facebook }`;
const instagraming = `${ data.labelInstagram }  ${ data.instagram }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }`;
const tooting = `${ data.labelMastodon }  ${ data.mastodon }`;
const skeeting = `${ data.labelBluesky }  ${ data.bluesky }`;
const threading = `${ data.labelThreads }  ${ data.threads }`;
const webing = `\n${ data.labelWeb }  ${ data.web }`;
const linking = `${ data.labelLinks }  ${ data.links }`;
const emailing = `${ data.labelEmail }  ${ data.email }`;
const carding = `\n${ data.labelCard }  ${ data.npx }`;
const bio = `\n${ data.bio }`;
const msg = `\n${ data.msg }`;
const spacer = `\n`;

const card = [
	ps.multiline( avatar ), spacer,
	hr, heading, hr, working, workingUrl, 
  webing, linking, emailing,
  githubing, linkedining,
  facebooking, instagraming,
	twittering, tooting, skeeting, threading,
	carding, bio, msg
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( boxen( output, options ) );
