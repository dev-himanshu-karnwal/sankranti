import { Link } from "react-router-dom";

function PanelFooter() {
  return (
    <footer className="bg-surface-subtle flex justify-between items-center px-8 text-[12px] font-semibold leading-none tracking-normal text-center text-text-primary w-full max-w-[428px] h-[61px] mx-auto">
      <Link
        to="/home"
        className="hover:text-primary transition-colors text-primary"
      >
        HOME
      </Link>
      <Link to="#" className="hover:text-primary transition-colors">
        MENU
      </Link>
      <Link to="#" className="hover:text-primary transition-colors">
        REORDER
      </Link>
      <Link to="/reward" className="hover:text-primary transition-colors">
        REWARDS
      </Link>
      <Link to="#" className="hover:text-primary transition-colors">
        SCAN
      </Link>
    </footer>
  );
}

export default PanelFooter;
