const PASSWORD = "askimiz2025";

function login() {
  const input = document.getElementById("pwd").value;
  if (input === PASSWORD) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Şifre yanlış!");
  }
}

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
    method: "POST",
    body: formData
  });
  return await res.json();
}

document.getElementById("fileInput").addEventListener("change", async e => {
  const res = await uploadImage(e.target.files[0]);
  const img = document.createElement("img");
  img.src = res.secure_url;
  document.getElementById("gallery").prepend(img);
});