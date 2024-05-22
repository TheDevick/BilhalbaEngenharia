import Header from "@/app/components/header";
import Intro from "@/app/components/intro";
import Nav from "@/app/components/nav/nav";

export default function Home() {
	return (
		<div className="is-preload">
			<div id="wrapper" className="fade-in">
				<Intro />
				<Header />
				<Nav />
			</div>
		</div>
	);
}
