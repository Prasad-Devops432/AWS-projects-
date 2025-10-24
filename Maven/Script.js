/* Inject the CSS into the document from JavaScript so this .js file is valid JS */
const css = `
body {
    font-family: Arial, sans-serif;
    background: #eef2f3;
    color: #333;
    text-align: center;
    margin-top: 50px;
}
button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background: #0056b3;
}
`;

const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
