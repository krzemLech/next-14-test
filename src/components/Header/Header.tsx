import Logo from "./Logo";
import Menu from "./Menu";

type Props = { name: string }

function Header({ name }: Props): JSX.Element {
    return ( <header className="flex justify-between px-10 py-5 bg-neutral-950 border-b border-neutral-600">
        <Logo />
        <div>Hello {name}!</div>
       <Menu />
    </header> );
}

export default Header;