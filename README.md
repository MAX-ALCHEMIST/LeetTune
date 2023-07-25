# LeetTune - Local Extension Setup Guide

LeetTune is a custom extension that allows you to play different audio files whenever you successfully submit or your problem gets accepted on LeetCode. You can also set up your own custom songs for success and wrong submissions. This guide will walk you through the steps to set up the LeetTune extension on your local machine.

## Installation

1. **Download the ZIP**: Visit the LeetTune GitHub repository (https://github.com/your-username/LeetTune) and click on the "Download ZIP" button to download the extension's source code as a ZIP file.

2. **Unzip the Folder**: Extract the contents of the downloaded ZIP file to a convenient location on your computer.

3. **Open Chrome Browser**: Launch your Google Chrome browser.

4. **Access Extensions**: In the address bar, enter `chrome://extensions/`, and press Enter. This will take you to the Chrome Extensions page.

5. **Enable Developer Mode**: In the top right corner of the Extensions page, toggle on the "Developer mode" switch. This enables you to load unpacked extensions.

6. **Load the Extension**: Click on the "Load unpacked" button that appears after enabling Developer mode. A file dialog will open.

7. **Select the Unzipped Folder**: In the file dialog, navigate to the folder where you extracted the LeetTune extension, and click the "Select Folder" button.

## Setup Custom Audio Files

1. **Prepare Your Audio Files**: Place your custom audio files for success and wrong submissions in the `assets/` folder of the LeetTune extension. Make sure to rename the files to `accepted.mp3` for success and `wrong.mp3` for wrong submissions.

## Usage

1. **Activate the Extension**: Now that the LeetTune extension is loaded, you should see its icon in the Chrome toolbar.

2. **LeetCode Submissions**: Whenever you submit a solution to LeetCode, LeetTune will automatically detect if your answer is accepted or wrong. It will play the corresponding audio file based on your submission result.

Congratulations! You have successfully set up the LeetTune extension on your local machine. Now, you can enjoy listening to your favorite tunes whenever you conquer a LeetCode problem or get some motivation to try again when your answer is wrong. Happy coding!

**Note**: This extension is intended for local use only and does not interact with the actual LeetCode platform. It provides audio feedback based on the submission results obtained from the LeetCode website.also this will only work on old leetcode version.
