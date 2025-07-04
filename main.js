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

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
}

function showSection(section) {
  document.getElementById("upload-section").style.display = section === 'upload' ? 'block' : 'none';
  document.getElementById("gallery-section").style.display = section === 'gallery' ? 'block' : 'none';
}

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
      method: "POST",
      body: formData
    });
    if (!res.ok) throw new Error("Yükleme başarısız");
    return await res.json();
  } catch (err) {
    alert("Resim yüklenemedi. Lütfen tekrar deneyin.");
    return null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("fileInput");
  input.addEventListener("change", async e => {
    const file = e.target.files[0];
    if (!file) {
      alert("Lütfen bir dosya seçin.");
      return;
    }
    const res = await uploadImage(file);
    if (res && res.secure_url) {
      const img = document.createElement("img");
      img.src = res.secure_url;
      document.getElementById("gallery").prepend(img);
      e.target.value = "";
    }
  });
});