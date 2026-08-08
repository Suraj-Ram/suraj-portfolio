"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<button
				type="button"
				aria-label="Toggle theme"
				className="rounded-md p-1.5 text-gray-600 dark:text-slate-400"
			>
				<span className="block h-4 w-4" />
			</button>
		);
	}

	const isDark = resolvedTheme === "dark";

	return (
		<button
			type="button"
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="rounded-md p-1.5 text-gray-600 transition-colors hover:text-main-600 dark:text-slate-400 dark:hover:text-main-400"
		>
			{isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
		</button>
	);
}
