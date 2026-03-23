# 🎛️ Interview Atlas — Skeuomorphic Control Panel

> Reimagining an authentic interview report as a skeuomorphic control panel you’ll want to reach out and operate.

<br>

## ✨ What is this?

This isn't just another project that simply "pastes text onto a webpage."

Its source material is an in-depth interview report—exploring how one individual navigated the choices between pursuing graduate studies, launching a startup, and defining their own self-worth; specifically, it examines whether **using AI to understand emotions** is a worthy pursuit to serve as a long-term guiding mission.

We deconstructed the report's entire chain of reasoning into **14 narrative modules**, then reassembled them using a skeuomorphic design language: metal panels, leather textures, wood-grain bases, LED indicators, recessed dividers, screw-fastened nameplates... every visual element is crafted to simulate the tactile sensation of a real-world device. **📖 [Read Online → GitHub Pages](https://paranoiawang0818.github.io/interview_with_GPT/)**

<br>

## 🖥️ Preview

| Section | Description |
|------|------|
| 🟢 **Hero Dashboard** | Main Title + Four Data Gauges + Three Control Buttons |
| 🟠 **Volume Directory** | Complete Index of 14 Volumes; Click to Navigate |
| 🔵 **Content Panel** | Alternating display of three material textures: Metal, Leather, and Wood Grain |
| 🔴 **Appendix Resources** | One-click download of original PDF / Link to full conversation logs |

<br>

## 📂 Project Structure

```
interview_with_GPT/
├── index.html          # Page Skeleton (Skeuomorphic Control Panel Layout)
├── styles.css          # All Styles (Material Textures / LEDs / Buttons / Panels)
├── main.js             # Data + Rendering Logic (Dynamic generation of 14 volumes of content)
├── Interview Report.pdf  # Original Interview Report
└── .gitignore
```

<br>

## 🎨 Design Highlights

🔩 **Realistic Material Textures** — Brushed metal, embossed leather, and wood-grain backplates; three panel materials alternate to prevent visual fatigue.

💡 **LED Indicator System** — A four-color cycle (Green / Amber / Blue / Red); each chapter and card features its own independent status light.

⚙️ **Rack-Mount Layout** — A top-mounted metal navigation bar paired with bottom-mounted screw-and-nameplate details, simulating the overall look of a standard 19-inch equipment rack.

🎚️ **Tactile Button Feedback** — Buttons depress by 2px upon mouse-down and spring back upon release, simulating the tactile feel of physical switches.

📐 **Recessed Dividers** — Uses `inset shadow` effects to simulate milled grooves on a metal panel surface.

🌫️ **Global Noise Texture** — An SVG noise overlay combined with a vignette gradient creates a subtle graininess, simulating the surface texture of real-world equipment.

<br>


<br>

## 🚀 Running Locally

No dependencies to install—simply open directly in your browser:

```bash
# Clone the repository
git clone https://github.com/paranoiawang0818/interview_with_GPT.git

# Open the page
open interview_with_GPT/index.html
# For Windows users:
start interview_with_GPT/index.html
```

<br>

## 🛠️ Tech Stack

- **HTML / CSS / Vanilla JS** — Zero frameworks, zero build tools; just open and use
- **Google Fonts** — Orbitron (dashboard digits) + Share Tech Mono (labels) + Inter (body text)
- **Pure CSS Material Simulation** — All textures, lighting, and embossed effects are achieved solely through CSS gradients and shadows; no image assets required

<br>

## 📄 License

The content of this project is compiled based on a real interview report and is intended strictly for educational and demonstration purposes. ---

<p align="center"> 
<sub>🔧 Built with care · Designed as a skeuomorphic control panel · 2026</sub>
</p>
