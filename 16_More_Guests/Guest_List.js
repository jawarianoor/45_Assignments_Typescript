"use strict";
let Guest_List = [`Imran Khan`, `Asif Ali Zardari`, `Nawaz Sharif`];
//  for(let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Mr.` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n`)
// }
let absent_Guest = `Imran Khan`;
let new_Guest = `Kamran Tessori`;
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear Mr.` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n`);
}
console.log(`Mr. ${absent_Guest} is not coming to the party`);
console.log(`Good News! We find big table so we are inviting 3 more guests. `);
Guest_List.unshift(`Sir Zia Khan`);
Guest_List.splice(2, 0, `Maryam Nawaz`);
Guest_List.push(`Bilawal Butto `);
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear Mr.` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n`);
}
