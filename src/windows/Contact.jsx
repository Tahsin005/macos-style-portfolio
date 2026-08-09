import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="space-y-5 p-5">
                <img
                    src="https://avatars.githubusercontent.com/u/124136023?v=4"
                    alt="MD. Tahsin Ferdous"
                    className="w-20 rounded-full"
                />

                <h3>Let's Connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
                <p>
                    <a href="mailto:tahsin.ferdous3546@gmail.com">
                        tahsin.ferdous3546@gmail.com
                    </a>
                </p>

                <ul>
                    {socials.map(({ id, text, icon, bg, link }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={text}
                            >
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
