// JavaScript 코드는 여기에 추가됩니다.
// 현재는 특별한 기능이 없으므로 비워둡니다.
console.log("iMate 랜딩 페이지 스크립트 로드됨");

document.addEventListener('DOMContentLoaded', () => {
    console.log("iMate 랜딩 페이지 스크립트 로드됨");

    // 네비게이션 링크 부드러운 스크롤 및 활성 상태 관리
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('main section');

    // 네비게이션 클릭 시 스크롤 (CSS scroll-behavior와 함께 사용하거나 대체 가능)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 기본 해시 변경 동작을 막지 않고 CSS의 smooth scroll을 활용합니다.
            // 만약 CSS smooth scroll을 지원하지 않는 브라우저를 위해 JS 스크롤을 구현하려면
            // e.preventDefault(); 와 함께 아래 scrollIntoView 로직을 사용합니다.
            
            // 현재 활성 링크에서 active 클래스 제거
            navLinks.forEach(nav => nav.classList.remove('active'));
            // 클릭된 링크에 active 클래스 추가
            this.classList.add('active');

            // 아래 코드는 CSS scroll-behavior:smooth 와 중복될 수 있어 주석 처리합니다.
            // 필요에 따라 주석을 해제하고 사용하세요.
            /*
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            */
        });
    });

    // 스크롤 위치에 따른 네비게이션 활성 상태 업데이트
    function updateActiveNavLink() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // 현재 스크롤 위치가 섹션의 시작점보다 크고, 섹션의 끝점보다 작을 때
            // 약간의 오차범위(offset)를 두어 더 자연스럽게 활성화되도록 함
            const offset = window.innerHeight * 0.4; // 화면 높이의 40%를 오프셋으로
            if (pageYOffset >= sectionTop - offset && pageYOffset < sectionTop + sectionHeight - offset) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
        
        // Hero 섹션이 최상단에 있을 때 '소개' 메뉴 활성화
        if (pageYOffset < sections[0].offsetTop - window.innerHeight * 0.4 && currentSectionId === '') {
            navLinks.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('header nav ul li a[href="#hero"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // 페이지 로드 시 초기 실행

    // 스크롤 애니메이션 (Intersection Observer)
    const animatedElements = document.querySelectorAll('.reveal-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // 한 번 나타난 후에는 계속 보이도록 observer에서 제외 (선택 사항)
                    // observerInstance.unobserve(entry.target);
                } else {
                    // 화면에서 사라질 때 다시 애니메이션을 적용하고 싶다면 아래 주석 해제
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, {
            threshold: 0.1 // 요소가 10% 보일 때 애니메이션 시작
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
}); 