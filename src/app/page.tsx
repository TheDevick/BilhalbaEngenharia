import Content from "@/app/components/content/content";
import Header from "@/app/components/header";
import Intro from "@/app/components/intro";
import Nav from "@/app/components/nav/nav";

export default function Home() {
	return (
		<div id="wrapper" className="fade-in">
			<Intro />
			<Header />
			<Nav />
			<Content />
		</div>
	);
}
