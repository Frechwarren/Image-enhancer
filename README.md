# Photo Enhancer

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## About the Project

Photo Enhancer is a web-based application that allows users to upload an image and apply sharpening filters to enhance its quality. The project leverages modern web technologies to provide a seamless and efficient user experience for image processing directly in the browser.

### Features:
- **Image Upload**: Users can upload images from their local device.
- **Image Preview**: Displays the uploaded image for preview before enhancement.
- **Image Sharpening**: Applies a sharpening filter to enhance the image quality using the `canvas` API.
- **Real-time Processing**: All image processing is done locally in the browser without the need for external APIs.

## Tech Stack

This project is built using the following technologies:

1. **React**  
   - A JavaScript library for building user interfaces. It is used to create the interactive components of the application.

2. **TypeScript**  
   - A strongly typed programming language that builds on JavaScript, providing better tooling and error checking.

3. **Next.js**  
   - A React framework for building server-rendered and statically generated web applications. It is used to structure the project and handle routing.

4. **Tailwind CSS**  
   - A utility-first CSS framework for styling the application. It provides pre-defined classes for rapid UI development.

## How It Works

1. **Upload an Image**: The user selects an image file from their local device.
2. **Preview the Image**: The uploaded image is displayed in a preview area.
3. **Enhance the Image**: A sharpening filter is applied to the image using the `canvas` API, enhancing its quality.
4. **Download or View**: The enhanced image is displayed for the user to view or download.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/photo-enhancer.git
   cd photo-enhancer