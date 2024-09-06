export default function ThemeToggle() {
  const onClickLight = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  const onClickDark = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const onClickSystem = () => {
    matchMedia("(prefers-color-scheme: dark)").matches
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  };

  return (
    <section className="flex gap-1 dark:text-slate-200">
      <button onClick={() => onClickLight()}>Light</button>
      <button onClick={() => onClickDark()}>Dark</button>
      <button onClick={() => onClickSystem()}>System</button>
    </section>
  );
}
