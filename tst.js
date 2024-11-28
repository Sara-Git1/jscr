<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Photo Gallery</title>
    <style>
        /* Add your CSS styles here */
        figure {
            margin: 20px;
            border: 1px solid #ccc;
            padding: 10px;
        }
        img {
            width: 300px;
            height: 200px;
        }
        figcaption {
            text-align: center;
            font-weight: bold;
        }
        .highlighted {
            border: 2px solid blue;
        }
    </style>
</head>
<body>
    <figure>
        <img src="image1.jpg" alt="Image 1 description">
        <figcaption>Image 1</figcaption>
    </figure>
    <script>
        const images = document.querySelectorAll('img');

        images.forEach(image => {
            image.addEventListener('mouseover', () => {
                image.classList.add('highlighted');
            });

            image.addEventListener('mouseout', () => {
                image.classList.remove('highlighted');
            });

            image.addEventListener('focus', () => {
                image.classList.add('highlighted');
            });

            image.addEventListener('blur', () => {
                image.classList.remove('highlighted');
            });

            image.tabIndex = 0; // Make images focusable
        });

        window.onload = () => {
            // Add any additional initialization code here
        };
    </script>
</body>
</html>
