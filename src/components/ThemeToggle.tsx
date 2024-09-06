// TODO: Move theme logic to utils
export default function ThemeToggle() {
  const onClickLight = () => {
    // If switching to same theme, do nothing
    if (localStorage.getItem("theme") === "light") return;
    // If switching from light system theme to light theme, set just localStorage entry
    if (
      !localStorage.getItem("theme") &&
      matchMedia("(prefers-color-scheme: light)").matches
    ) {
      localStorage.setItem("theme", "light");
      return;
    }
    // @ts-ignore
    document.startViewTransition({
      update: () => {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      },
      types: ["theme"],
    });
  };

  const onClickDark = () => {
    // If switching to same theme, do nothing
    if (localStorage.getItem("theme") === "dark") return;
    // If switching from dark system theme to dark theme, set just localStorage entry
    if (
      !localStorage.getItem("theme") &&
      matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("theme", "dark");
      return;
    }

    // @ts-ignore
    document.startViewTransition({
      update: () => {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      },
      types: ["theme"],
    });
  };

  const onClickSystem = () => {
    // If switching to same theme, do nothing
    if (!localStorage.getItem("theme")) return;
    // If switching from dark theme to dark system theme, remove just localStorage entry
    if (
      localStorage.getItem("theme") === "dark" &&
      matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.removeItem("theme");
      return;
    }
    // If switching from light theme to light system theme, remove just localStorage entry
    if (
      localStorage.getItem("theme") === "light" &&
      matchMedia("(prefers-color-scheme: light)").matches
    ) {
      localStorage.removeItem("theme");
      return;
    }
    // @ts-ignore
    document.startViewTransition({
      update: () => {
        matchMedia("(prefers-color-scheme: dark)").matches
          ? document.documentElement.classList.add("dark")
          : document.documentElement.classList.remove("dark");
        localStorage.removeItem("theme");
      },
      types: ["theme"],
    });
  };

  return (
    <section className="flex gap-1 dark:text-slate-200">
      <button onClick={() => onClickLight()}>Light</button>
      <button onClick={() => onClickDark()}>Dark</button>
      <button onClick={() => onClickSystem()}>System</button>
    </section>
  );
}
