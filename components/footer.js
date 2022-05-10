export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer has-text-centered">
                <p>
                    Copyright © {currentYear} <strong>Zeytun ABC LTD</strong>. The source code is licensed. All rights are reserved.
                </p>
        </footer>
    );
}
