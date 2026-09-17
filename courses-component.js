(() => {
  const courseCards = [
    {
      no: '01',
      tag: 'ONLINE EDUCATION',
      title: 'Online Drivers Education Course',
      price: '$140',
      priceLabel: 'Teen / Adults',
      accent: 'yellow',
      intro: '',
      bullets: [
        '30 hours Online drivers education course for teens and adults: $140',
        'Note: Under 18yrs old parent teen class is included in this course.',
        'This course is all online only for final exam student must come in to the office.'
      ],
      note: 'After registration, Please pay by <a href="https://venmo.com/code?user_id=2053348383522816810" target="_blank" rel="noopener">VENMO</a> or credit card then our DMV approved vendor will send you the link to start this course. Thanks'
    },
    {
      no: '02',
      tag: 'RE-EXAMINATION',
      title: 'Re-Examination Course',
      price: '$120',
      priceLabel: 'Permit Test 3 Times Failed',
      accent: 'dark',
      intro: 'If you have failed the road test three times, you are required by the DMV to complete a 7-period of driving requirement.',
      bullets: [
        '$120 for 8 hour reexamination course for permit exam 3 times failed (All Online)',
        'Certificate is issued upon completion',
        'Required by DMV'
      ],
      note: 'Once you register online then our instructor will call or text you for the schedule thanks'
    },
    {
      no: '03',
      tag: 'DRIVER IMPROVEMENT',
      title: 'Driving Improvement Course',
      price: '$100',
      priceLabel: 'Driving Improvement Course',
      accent: 'paper',
      intro: '',
      bullets: [
        'Get five (5) good points on your driving record.',
        'Improved knowledge of practical and effective defensive driving strategies',
        'Get a ticket DISMISSED or REDUCED in traffic court',
        'Prevent license suspension or reinstate license with DMV',
        'Get a lower auto insurance premium',
        'Traffic court preparation, tips and guidance.'
      ],
      note: 'Once you register online then our instructor will call or text you for the schedule thanks'
    },
    {
      no: '04',
      tag: 'TEEN LICENSE',
      title: 'Teenagers Driving License',
      price: '$350',
      priceLabel: 'Behind The Wheels',
      accent: 'paper',
      intro: '',
      bullets: [
        '7 days courses + road test',
        '50min driving per day',
        '50min observation per day',
        'For ages under 18 only',
        'At the end of this course successful candidates will be issued a license*.'
      ],
      note: 'General Requirements: Photocopy of permit, DEC 1 card from high school, 45 hours driving experience and a signed contract, which you can find <a href="https://ndsva.com/wp-content/uploads/2020/10/Northern-VA-Driving-School-Contract.pdf" target="_blank" rel="noopener">here</a>. This course is only for those who already know driving.<br><br>Once you register online then our instructor will call or text you for the schedule thanks'
    },
    {
      no: '05',
      tag: 'DRIVING TRAINING',
      title: 'Teens/Adults Driving Training',
      price: '$100',
      priceLabel: '90min Class',
      accent: 'yellow-soft',
      intro: '',
      bullets: [
        '3 lessons 1 hour each for $200',
        '5 lessons 1 hour each for $300',
        '7 lessons 1 hour each for $400',
        'Designed for novice and amateurs',
        'Time of Operation: 7:00 am to 9:00 pm.',
        'For above 18 years of age and novice or amateur at driving.',
        'Free pick-up and drop-off',
        '1 hour driving practice and DMV appointment road test for $200 (must have DMV road test appointment) (Only for 18 years or above students)'
      ],
      note: 'Once you register online then our instructor will call or text you for the schedule thanks'
    },
    {
      no: '06',
      tag: 'ADULT WAIVER',
      title: 'Adult Waiver Course',
      price: '$400',
      priceLabel: 'A Substitute For Road Test',
      accent: 'dark',
      intro: '<strong>NOTE: THIS COURSE IS ONLY FOR EXPERIENCED DRIVERS</strong>',
      bullets: [
        'Must know how to drive',
        'Have a drivers education certificate',
        'Valid Virginia permit',
        '7 days course',
        '50min driving per day',
        '50min observation per day',
        'Test and waiver upon passing successfully'
      ],
      note: 'Once you register online then our instructor will call or text you for the schedule thanks'
    }
  ];

  const cardMarkup = (course, signupHref) => `
    <article class="premium-course-card premium-course-card--${course.accent}" data-premium-course-card>
      <div class="premium-course-topline">
        <span class="premium-course-number">${course.no}</span>
        <span class="premium-course-tag">${course.tag}</span>
      </div>
      <div class="premium-course-price-row">
        <div class="premium-course-price">${course.price}</div>
        <div class="premium-course-price-label">/${course.priceLabel}</div>
      </div>
      <h3>${course.title}</h3>
      ${course.intro ? `<p class="premium-course-intro">${course.intro}</p>` : ''}
      <ul class="premium-course-list">${course.bullets.map(item => `<li>${item}</li>`).join('')}</ul>
      <div class="premium-course-note"><span>NOTE</span><p>${course.note}</p></div>
      <a class="premium-course-cta" href="${signupHref}"><span>Register for this course</span><b>↗</b></a>
    </article>`;

  document.querySelectorAll('[data-course-component]').forEach((container) => {
    const signupHref = container.dataset.signupHref || '#registration';
    container.innerHTML = courseCards.map(course => cardMarkup(course, signupHref)).join('');
  });

  if (window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('[data-premium-course-card]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--course-x', `${x}%`);
        card.style.setProperty('--course-y', `${y}%`);
      });
    });
  }
})();
