const bootLogs = [
	"[    0.000000] Booting Linux kernel 6.2.10-arch1-1...",
	"[    0.000000] Initializing CPU...",
	"[    0.000002] Detected 8-core Intel i7-12700K (16 threads, 3.8 GHz)",
	"[    0.000034] Enabling kernel page tables...",
	"[    0.002003] Memory: 16GB DDR4 @ 3200MHz detected.",
	"[    0.003521] Kernel command line: root=/dev/sda1 ro quiet splash",
	"[    0.004210] Checking CPU microcode updates...",
	"[    0.005002] <span style='color: #0f0'>[ OK ]</span> Microcode update loaded for Intel Processor",
	"[    0.009201] Loading initial RAM disk...",
	"[    0.012842] Mounting root filesystem...",
	"[    0.015121] Filesystem check complete. No errors found.",
	"[    0.018002] <span style='color: #0f0'>[ OK ]</span> /dev mounted successfully.",
	"[    0.020313] <span style='color: #0f0'>[ OK ]</span> /sys mounted successfully.",
	"[    0.022009] <span style='color: #0f0'>[ OK ]</span> /proc mounted successfully.",
	"[    0.025613] Initializing system services...",
	"[    0.028201] <span style='color: #0f0'>[ OK ]</span> Detected Ethernet controller: Intel I225-V",
	"[    0.030002] <span style='color: #0f0'>[ OK ]</span> Network interface eth0 brought up: 192.168.1.100",
	"[    0.032719] <span style='color: #0f0'>[ OK ]</span> DHCP lease acquired from 192.168.1.1",
	"[    0.035212] <span style='color: #0f0'>[ OK ]</span> IPv6 support initialized.",
	"[    0.038521] Loading device drivers...",
	"[    0.042019] <span style='color: #0f0'>[ OK ]</span> Detected NVIDIA RTX 3060, initializing driver...",
	"[    0.045032] <span style='color: #0f0'>[ OK ]</span> NVIDIA 530.41.03 driver loaded.",
	"[    0.047712] <span style='color: #0f0'>[ OK ]</span> Enabling high-performance mode for GPU...",
	"[    0.050312] <span style='color: #0f0'>[ OK ]</span> Audio device detected: Realtek ALC1220",
	"[    0.052813] <span style='color: #0f0'>[ OK ]</span> Initializing Bluetooth controller...",
	"[    0.054200] <span style='color: #0f0'>[ OK ]</span> Bluetooth module active.",
	"[    0.057912] <span style='color: #0f0'>[ OK ]</span> USB devices detected: 4",
	"[    0.060012] <span style='color: #0f0'>[ OK ]</span> Logitech USB keyboard initialized.",
	"[    0.062721] <span style='color: #0f0'>[ OK ]</span> Razer Gaming Mouse initialized.",
	"[    0.065921] [INFO] Checking connected storage devices...",
	"[    0.068311] <span style='color: #0f0'>[ OK ]</span> /dev/nvme0n1p1 (1TB NVMe SSD) detected.",
	"[    0.070921] <span style='color: #0f0'>[ OK ]</span> /dev/sda1 (500GB HDD) mounted as /data.",
	"[    0.074212] <span style='color: #0f0'>[ OK ]</span> Swap space enabled (8GB).",
	"[    0.077613] Running system diagnostics...",
	"[    0.080002] <span style='color: #0f0'>[ OK ]</span> Kernel entropy pool seeded.",
	"[    0.082900] [FAIL] ACPI: BIOS firmware bug detected, workaround applied.",
	"[    0.085302] <span style='color: #0f0'>[ OK ]</span> Secure Boot disabled (non-UEFI mode detected).",
	"[    0.088912] <span style='color: #0f0'>[ OK ]</span> Loading security modules...",
	"[    0.090213] <span style='color: #0f0'>[ OK ]</span> AppArmor security policies enforced.",
	"[    0.092011] <span style='color: #0f0'>[ OK ]</span> Firewall enabled (iptables - DROP ALL).",
	"[    0.095781] <span style='color: #0f0'>[ OK ]</span> SSH service started on port 22.",
	"[    0.099102] <span style='color: #0f0'>[ OK ]</span> Fail2ban monitoring active.",
	"[    0.102900] <span style='color: #0f0'>[ OK ]</span> System time synchronized via NTP.",
	"[    0.105132] Running integrity checks...",
	"[    0.107901] <span style='color: #0f0'>[ OK ]</span> Filesystem integrity check passed.",
	"[    0.110312] <span style='color: #0f0'>[ OK ]</span> Kernel log buffer clear.",
	"[    0.112621] <span style='color: #0f0'>[ OK ]</span> SELinux policies loaded.",
	"[    0.115009] Initializing system services...",
	"[    0.118302] <span style='color: #0f0'>[ OK ]</span> Starting system logging service...",
	"[    0.120721] <span style='color: #0f0'>[ OK ]</span> System message bus (dbus) started.",
	"[    0.122501] <span style='color: #0f0'>[ OK ]</span> Sound system (PulseAudio) initialized.",
	"[    0.125900] <span style='color: #0f0'>[ OK ]</span> Display server (Xorg) started.",
	"[    0.128312] <span style='color: #0f0'>[ OK ]</span> Window manager initialized.",
	"[    0.130201] <span style='color: #0f0'>[ OK ]</span> Starting network monitoring services...",
	"[    0.132512] <span style='color: #0f0'>[ OK ]</span> Packet sniffer active.",
	"[    0.135213] <span style='color: #0f0'>[ OK ]</span> Checking running processes...",
	"[    0.137901] [INFO] Detected 137 active processes.",
	"[    0.140201] <span style='color: #0f0'>[ OK ]</span> No rogue processes detected.",
	"[    0.142812] <span style='color: #0f0'>[ OK ]</span> Cleaning up temporary files...",
	"[    0.145912] <span style='color: #0f0'>[ OK ]</span> Starting user services...",
	"[    0.150102] <span style='color: #0f0'>[ OK ]</span> Initializing AI-enhanced background processing.",
	"[    0.152001] <span style='color: #0f0'>[ OK ]</span> VRAM cache optimized for low-latency rendering.",
	"[    0.155912] <span style='color: #0f0'>[ OK ]</span> Running AI-assisted performance tuning...",
	"[    0.160002] <span style='color: #0f0'>[ OK ]</span> System optimization complete.",
	"[    0.162701] <span style='color: #0f0'>[ OK ]</span> AI-powered anomaly detection started.",
	"[    0.165312] <span style='color: #0f0'>[ OK ]</span> User-space applications initialized.",
	"[    0.170001] [INFO] Welcome to TG-Hack.",
	"[    0.175012] <span style='color: #0f0'>[ OK ]</span> System ready. Initializing user session.",
];

const terminal = document.getElementById("terminal");
const mainUI = document.getElementById("main-ui");
const timeDisplay = document.getElementById("timeDisplay");
const shutdownButton = document.getElementById("shutdown-btn");

// Function to add a boot log line
function addLine(text, delay) {
	return new Promise(resolve => {
		setTimeout(() => {
			const line = document.createElement("div");
			line.innerHTML = text;
			terminal.appendChild(line);
			window.scrollTo(0, document.body.scrollHeight);
			resolve();
		}, delay);
	});
}

// Boot sequence with progressive speed increase
async function bootSequence() {
	terminal.classList.remove("hidden"); // Show terminal

	for (let i = 0; i < bootLogs.length; i++) {
		let delay;
		if (i < 5) {
			delay = Math.random() * 20 + 10;
		} else if (i < 30) {
			delay = Math.random() * 10 + 5;
		} else {
			delay = Math.random() * 5 + 1;
		}

		await addLine(bootLogs[i], delay);
	}

	setTimeout(() => {
		fadeToBlack(); // Transition to next screen
	}, 100);

}

// Function to fade out and transition
async function fadeToBlack() {
	// Simulate a brief black screen delay (mimics display manager loading)
	terminal.style.display = "none";
	mainUI.style.display = "none";

	// Simulate resolution switch effect (scale UI for a moment)
	mainUI.style.opacity = "0";


	// Flicker effect before UI appears
	for (let i = 0; i < 2; i++) {
		await new Promise(resolve => setTimeout(resolve, 80));
		document.body.style.backgroundColor = "#0C0C0A"; // Slight gray flicker
		await new Promise(resolve => setTimeout(resolve, 80));
		document.body.style.backgroundColor = "rgb(14,15,29)";
	}

	const cursor = document.createElement("div");
	cursor.className = "cursor";
	cursor.textContent = "_";


	document.body.appendChild(cursor);
	await new Promise(resolve => setTimeout(resolve, 200));

	// cursor.remove();
	mainUI.style.opacity = "1";
	mainUI.style.display = "block";
	mainUI.classList.add("fade-in");
}

// Update time display
function updateTime() {
	const now = new Date();
	timeDisplay.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Shutdown button event
shutdownButton.onclick = () => location.reload(); // Reload page on shutdown

// Start boot sequence
bootSequence();

