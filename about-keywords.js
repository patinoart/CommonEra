const rowOne = () => {
    const marquee = document.querySelector('[wb-data="marquee"]');
    if (!marquee) {
        return;
    }
    const marqueeContent = marquee.firstChild;
    if (!marqueeContent) {
        return;
    }

    const marqueeContentClone = marqueeContent.cloneNode(true);
    marquee.append(marqueeContentClone);

    let tween;
    
    const playMarquee = () => {
        let progress = tween ? tween.progress() : 0;
        tween && tween.progress(0).kill();

        const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue('width'), 10);

        const distanceToTranslate = - 1 * (width);

        tween = gsap.fromTo(
            marquee.children,
            {
                x: 0
            },
            {
                x: distanceToTranslate,
                duration: 45,
                ease: "none",
                repeat: -1
            }
        );
        tween.progress(progress);

    };
    playMarquee();

    function debounce(func) {
        var timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(
                () => {
                    func();
                },
                500,
                event
            );
        };
    }

    window.addEventListener('resize', debounce(playMarquee));

    console.log({ marquee, marqueeContent });
}

document.addEventListener('DOMContentLoaded', rowOne);

const rowTwo = () => {
    const marquee = document.querySelector('[wb-data="marquee-2"]');
    if (!marquee) {
        return;
    }
    const marqueeContent = marquee.firstChild;
    if (!marqueeContent) {
        return;
    }

    const marqueeContentClone = marqueeContent.cloneNode(true);
    marquee.append(marqueeContentClone);

    let tween;
    
    const playMarquee = () => {
        let progress = tween ? tween.progress() : 0;
        tween && tween.progress(0).kill();

        const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue('width'), 10);

        const distanceToTranslate = - 1 * (width);

        tween = gsap.fromTo(
            marquee.children,
            {
                x: distanceToTranslate
            },
            {
                x: 0,
                duration: 35,
                ease: "none",
                repeat: -1
            }
        );
        tween.progress(progress);

    };
    playMarquee();

    function debounce(func) {
        var timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(
                () => {
                    func();
                },
                500,
                event
            );
        };
    }

    window.addEventListener('resize', debounce(playMarquee));

    console.log({ marquee, marqueeContent });
}

document.addEventListener('DOMContentLoaded', rowTwo);

const rowThree = () => {
    const marquee = document.querySelector('[wb-data="marquee-3"]');
    if (!marquee) {
        return;
    }
    const marqueeContent = marquee.firstChild;
    if (!marqueeContent) {
        return;
    }

    const marqueeContentClone = marqueeContent.cloneNode(true);
    marquee.append(marqueeContentClone);

    let tween;
    
    const playMarquee = () => {
        let progress = tween ? tween.progress() : 0;
        tween && tween.progress(0).kill();

        const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue('width'), 10);

        const distanceToTranslate = - 1 * (width);

        tween = gsap.fromTo(
            marquee.children,
            {
                x: 0
            },
            {
                x: distanceToTranslate,
                duration: 40,
                ease: "none",
                repeat: -1
            }
        );
        tween.progress(progress);

    };
    playMarquee();

    function debounce(func) {
        var timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(
                () => {
                    func();
                },
                500,
                event
            );
        };
    }

    window.addEventListener('resize', debounce(playMarquee));

    console.log({ marquee, marqueeContent });
}

document.addEventListener('DOMContentLoaded', rowThree);

const rowFour = () => {
    const marquee = document.querySelector('[wb-data="marquee-4"]');
    if (!marquee) {
        return;
    }
    const marqueeContent = marquee.firstChild;
    if (!marqueeContent) {
        return;
    }

    const marqueeContentClone = marqueeContent.cloneNode(true);
    marquee.append(marqueeContentClone);

    let tween;
    
    const playMarquee = () => {
        let progress = tween ? tween.progress() : 0;
        tween && tween.progress(0).kill();

        const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue('width'), 10);

        const distanceToTranslate = - 1 * (width);

        tween = gsap.fromTo(
            marquee.children,
            {
                x: distanceToTranslate
            },
            {
                x: 0,
                duration: 50,
                ease: "none",
                repeat: -1
            }
        );
        tween.progress(progress);

    };
    playMarquee();

    function debounce(func) {
        var timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(
                () => {
                    func();
                },
                500,
                event
            );
        };
    }

    window.addEventListener('resize', debounce(playMarquee));

    console.log({ marquee, marqueeContent });
}

document.addEventListener('DOMContentLoaded', rowFour);

const rowFive = () => {
    const marquee = document.querySelector('[wb-data="marquee-5"]');
    if (!marquee) {
        return;
    }
    const marqueeContent = marquee.firstChild;
    if (!marqueeContent) {
        return;
    }

    const marqueeContentClone = marqueeContent.cloneNode(true);
    marquee.append(marqueeContentClone);

    let tween;
    
    const playMarquee = () => {
        let progress = tween ? tween.progress() : 0;
        tween && tween.progress(0).kill();

        const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue('width'), 10);

        const distanceToTranslate = - 1 * (width);

        tween = gsap.fromTo(
            marquee.children,
            {
                x: 0
            },
            {
                x: distanceToTranslate,
                duration: 40,
                ease: "none",
                repeat: -1
            }
        );
        tween.progress(progress);

    };
    playMarquee();

    function debounce(func) {
        var timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(
                () => {
                    func();
                },
                500,
                event
            );
        };
    }

    window.addEventListener('resize', debounce(playMarquee));

    console.log({ marquee, marqueeContent });
}

document.addEventListener('DOMContentLoaded', rowFive);