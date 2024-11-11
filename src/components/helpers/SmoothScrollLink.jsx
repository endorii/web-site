const SmoothScrollLink = ({ to, children }) => {
    const handleClick = (e) => {
        e.preventDefault();

        const target = document.querySelector(to);
        if (target) {
            const targetPosition =
                target.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            let startTime = null;

            const duration = 600;

            const smoothScroll = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(
                    timeElapsed,
                    startPosition,
                    distance,
                    duration
                );
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(smoothScroll);
            };

            const ease = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
            };

            requestAnimationFrame(smoothScroll);
        }
    };

    return (
        <a href={to} onClick={handleClick}>
            {children}
        </a>
    );
};

export default SmoothScrollLink;
