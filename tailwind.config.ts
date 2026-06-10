import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Times New Roman"', "Times", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        pexilllin: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          primary: "#1288B0",
          secondary: "#193F63",
          accent: "#8b5cf6",
          dark: "#075985",
        },
        // Paxillin app design tokens (sampled from the app UI)
        pax: {
          navy: "#193F63", // primary buttons, headings
          "navy-dark": "#122E49", // hover
          cyan: "#1288B0", // brand, links, active states
          "cyan-dark": "#0E6F90",
          teal: "#0097A7",
          sky: "#E0F7FA", // light-cyan chips / highlights
          ice: "#E5F9FF", // selected-state fills
          mist: "#EBF0F3", // app page background
          cloud: "#F4F7F9", // section background
          line: "#E2E8EC", // card borders
          ink: "#0F1E2E", // primary text
          slate: "#698299", // secondary text
          green: "#197D00", // success
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-20px) rotate(5deg)",
          },
          "66%": {
            transform: "translateY(10px) rotate(-3deg)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(14, 165, 233, 0.3), 0 0 40px rgba(16, 185, 129, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(14, 165, 233, 0.6), 0 0 80px rgba(16, 185, 129, 0.4)",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.7",
          },
        },
        "bounce-subtle": {
          "0%, 100%": {
            transform: "translateY(0px)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-5px)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        typewriter: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "0%, 50%": {
            "border-color": "transparent",
          },
          "51%, 100%": {
            "border-color": "currentColor",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        float: "float 8s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s infinite",
        typewriter: "typewriter 3s steps(30, end) forwards",
        blink: "blink 1s step-end infinite",
        "fade-in-delay-1": "fade-in 0.8s ease-out 0.3s both",
        "fade-in-delay-2": "fade-in 0.8s ease-out 0.6s both",
        "fade-in-delay-3": "fade-in 0.8s ease-out 0.9s both",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
