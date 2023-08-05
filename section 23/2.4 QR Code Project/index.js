/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
    .then(answers => {
        // fs.writeFile('ans.txt', answers.URL);
        fs.writeFile("ans.txt", answers.URL, (err) => {
            console.log("The file has been saved!");
          });

        var qr_svg = qr.image(answers.URL);
        qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
    });