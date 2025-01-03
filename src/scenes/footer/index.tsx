import Logo from "@/assets/Logo.png";

function Footer() {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">
                        Vielen Dank, dass du uns besuchst! Folge uns auf Social Media,
                        um Updates, Inspiration und Neuigkeiten zu erhalten. Wir freuen
                        uns, Teil deiner Reise zu sein!
                    </p>
                    <p>© Mantra Studio All Rights Reserved</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Besuche uns auf Facebook</p>
                    <p className="my-5">Folge uns auf Instagram</p>
                    <p>Schau doch mal auf TikTok vorbei</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Kontakt</h4>
                    <p className="my-5">Du kannst uns gerne anrufen</p>
                    <p>(+49) 123-4567</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;