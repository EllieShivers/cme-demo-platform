import {TextLesson} from '../../../projects/simple-course-core/src/lib/models/text-lesson';
import {VideoLesson} from '../../../projects/simple-course-core/src/lib/models/video-lesson';
import {Unit} from '../../../projects/simple-course-core/src/lib/models/unit';
import {LessonType} from '../../../projects/simple-course-core/src/lib/models/lesson';
import {ImageAssetPosition} from '../../../projects/simple-course-core/src/lib/models/image-asset';
import {MultipleChoiceQuestion, QuizLesson, TrueFalseQuestion} from '../../../projects/simple-course-core/src/lib/models/quiz-lesson';

let lesson0101: TextLesson =
  {
    title: 'Unit 1 Introduction',
    type: LessonType.Text,
    sections: [
      {
        header: 'Welcome to Unit 1 - Introduction',
        body: [
          'Welcome to Transgender and Nonbinary Care from a Social Perspective. The goal of this course is to equip healthcare providers with a greater understanding of the transgender and nonbinary community from a predominantly social viewpoint, in order to improve the overall quality of patient care and encourage more inclusive and affirming clinical environments, as a deeper understanding of this unique patient population is key to providing the best quality of care possible.\nNote that while this course is designed as continuing professional development for healthcare providers, much of the content presented may be applicable to those outside of healthcare as well.'
        ],
        imageAsset: {
          'fileName': 'transgenderprideflag.jpg',
          'position': ImageAssetPosition.right,
          'altText': 'Transgender Pride Flag',
          'caption': 'Transgender Pride Flag'
        }
      },
      {
        'header': 'Course History',
        'body': [
          'This course was developed as a student project for the Georgia Institute of Technology, CS6440 Educational Technology. The design was laid out by a transgender individual and written from a community perspective rather than a typical clinical approach from non-transgender professionals, and as such only general information on clinical care is provided.'
        ]
      },
      {
        'header': 'Content Overview',
        'body': [
          'This course contains seven units covering the following topics. Unit 1 is an Introduction to Transgender and Nonbinary, providing a broad foundation for the rest of the content. Unit 2 focuses on what it means to be Transgender, going over terminology and general concepts related to transitional care. Unit 3 builds upon this to offer greater detail on what it means to be Nonbinary, what the relationship is between being transgender and nonbinary, as well as additional considerations that should be taken into account with nonbinary patients. Note that Transgender and Nonbinary are neither inherently inclusive nor exclusive, this will be discussed in more detail in Units 2 and 3. Unit 4 is designed to provide a brief overview of the issues that the Transgender and Nonbinary community faces socially with discrimination or marginalization, from cultural and legal perspectives alike. Unit 5 provides content on sexuality as it relates and does not relate to gender identity. Unit 6 goes into more detail on medical transition from a general perspective. Unit 7 brings together elements of the previous content areas, with recommendations on providing an inclusive and affirming environment for patients.',
        ]
      }
    ]
  };

let lesson0102: VideoLesson = {
  type: LessonType.Video,
  title: 'Why does this matter? The Story of Tyra Hunter',
  videoEmbedCode: '<!--suppress HtmlDeprecatedAttribute --><iframe width="560" height="315" src="https://www.youtube.com/embed/YNBr_gOET8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n',
  transcript: [
    'So, why does this course matter?',
'Note that this video uses the term "transgender" to accurately reflect the language in the cited studies. While this is presumed to be inclusive of all nonbinary people, some nonbinary people do not identify as transgender and this identification should be respected at all times, which is why you will see this course attempt to use terminology such as transgender and/or nonbinary when not in direct reference to other work.',
    'In 2018, a study was published in the journal Social Work in Health Care by Luisa Kcomt providing a systematic review of literature on the topic of transgender healthcare and discrimination. The study showed profound discrimination encountered by transgender individuals accessing or attempting to access healthcare.',
    'While numbers showed large variance between studies, the following numbers provide some insight into how serious the issue can be:<ul><li>- 5% to 41% reported being denied care outright. (AVG: 20%)</li><li>- 40% do not have a regular PCP.</li><li>- 20% to 50% encountered lack of knowledge or had to educate their PCP. (AVG: 31%)</li><li>- 21% to 57% were not out to their health care provider (Reason not given. AVG: 36%)</li><li>- 6% to 28% were verbally harassed in a health care setting. (AVG: 17%)</li><li>- 1% to 2% were physically attacked in a health care setting. (AVG: 1.5%)</li></ul>',
    'While the largest outlying figures skewed towards being from studies performed during the first part of the 2010s, the more recent studies still showed overwhelming discrimination. While progress has been made, there is still need for far greater improvement.',
    'Citing other research in the field, Ms. Kcomt also provides a concise summary of why a course such as this is needed.',
    '"Health-care providers’ attitudes about sexual orientation, gender identity, and gender expression affect the way that they relate to LGBT patients. Whether intended or not, health-care providers can display homophobic, heterosexist, transphobic, and cisgenderist attitudes and behaviors which mirror societal values. These biases limit their ability to create a therapeutic alliance with LGBT patients and create a structural barrier to accessing quality care. Researchers and practitioners have underscored the need to develop cultural competency and capacity building in serving LGBT clients in general and transgender individuals in particular."',
    'Unfortunately, this discrimination has created a strong distrust between many members of the transgender/nonbinary community and health care providers. Transgender/nonbinary people many times don\'t know what to expect in accessing healthcare, or coming out to their healthcare providers. Even when an individual has not encountered discrimination, there is a very good chance they know many people who have. There is perhaps no case that encapsulates discrimination and the reason for this distrust better than that of Tyra Hunter.',
    'In 1995, in Washington DC, 24-Year-old Tyra Hunter was a passenger in a car accident and suffered severe injuries. When emergency crews arrived on the scene, they began cutting away her clothing to provide treatment, and discovered that Ms. Hunter had a penis---that she was transgender. Eyewitnesses report that the person treating Ms. Hunter immediately backed away, shouting obscenities directed at her. It is then reported that they stood around and refused treatment for up to 7 minutes, while Tyra Hunter lay there severely injured, repeatedly mocking Ms. Hunter despite the onlookers pleading for them to provide aid.',
    'Eventually a supervisor showed up and provided treatment and Tyra Hunter was brought to DC General Hospital. There, she was refused treatment by a physician and treated under protocol as a drug addict, despite no evidence this was the case.',
    'Tyra Hunter died at 5:20 PM of blunt force trauma.',
    'Tyra Hunter’s mother filed and won a wrongful death suit against the city and was awarded $2.9 million dollars. Expert testimony during the trial stated that had Ms. Hunter received proper care at either the scene of the accident or DC General, she would have had an 86% chance of survival.'
  ],
  citations: [
    {
      apaString: 'Kcomt, L. (2018). Profound health-care discrimination experienced by transgender people: rapid systematic review. Social Work in Health Care, 58(2), 201–219. doi: 10.1080/00981389.2018.1532941'
    },
    {
      apaString: 'Bowles, S. (1995, December 10). A DEATH ROBBED OF DIGNITY MOBILIZES A COMMUNITY. Retrieved from https://www.washingtonpost.com/archive/local/1995/12/10/a-death-robbed-of-dignity-mobilizes-a-community/2ca40566-9d67-47a2-80f2-e5756b2753a6/',
      link: 'https://www.washingtonpost.com/archive/local/1995/12/10/a-death-robbed-of-dignity-mobilizes-a-community/2ca40566-9d67-47a2-80f2-e5756b2753a6/'
    },
    {
      apaString: 'Fern, M. E., & Ez. (1998, December 12). DEATH SUIT COSTS CITY $2.9 MILLION. Retrieved from https://www.washingtonpost.com/archive/local/1998/12/12/death-suit-costs-city-29-million/b8ab4d34-1907-463c-b5d5-64ec00dee2a1/',
      link: 'https://www.washingtonpost.com/archive/local/1998/12/12/death-suit-costs-city-29-million/b8ab4d34-1907-463c-b5d5-64ec00dee2a1/'
    },
    {
      apaString: 'Adams, M. (2016). An intersectional approach to services and care for LGBT elders. Journal of the American Society on Aging, 40(2), 94–100.'
    },
    {
      apaString: 'Ansara, Y. G. (2015). Challenging cisgenderism in the ageing and aged care sector: Meeting the needs of older people of trans and/or non-binary experience. Australasian Journal of Ageing, 34(2), 14–18. doi:10.1111/ajag.12278'
    },
    {
      apaString: 'Hillman, J. (2016). Understanding care disparities among older lesbian, gay, bisexual, and transgender (LGBT) adults: Recommendations for culturally competent care. Journal of Gerontology and Geriatric Research, 5(5), 1–2. doi:10.4172/2167-7182.1000345'
    },
    {
      apaString: 'Moone, R. P., Croghan, C. F., & Olson, A. M. (2016). Why and how providers must build culturally competent, welcoming practices to serve LGBT elders. American Society on Aging, 40(2), 73–77.'
    },
    {
      apaString: 'National Resource Center on LBGT Aging. (2012). Inclusive services for LGBT older adults: A practical guide to creating welcoming agencies. Retrieved from http://www.lgbtagingcenter.org/resources/resource.cfm?r=487',
      link: 'http://www.lgbtagingcenter.org/resources/resource.cfm?r=487'
    },
    {
      apaString: 'Van Den Bergh, N., & Crisp, C. (2004). Defining culturally competent practice with sexual minorities: Implications for social work education and practice. Journal of Social Work Education, 40(2), 221–238. doi:10.1080/10437797.2004.10778491'
    },
    {
      apaString: 'Wheeler, D. P., & Dodd, S. (2011). LGBTQ capacity building in health care systems: A social work perspective. Health & Social Work, 36(4), 307–309'
    },
    {
      apaString: 'Wilkerson, J. M., Rybicki, S., Barber, C. A., & Smolenski, D. J. (2011). Creating a culturally competent clinical environment for LGBT patients. Journal of Gay & Lesbian Social Services, 23(3), 376–394. doi:10.1080/10538720.2011.589254'
    },
    {
      apaString: 'Zuzelo, P. R. (2014). Improving nursing care for lesbian, bisexual, and transgender women. Journal of Obstetric, Gynecological and Neonatal Nursing, 43(4), 520–530. doi:10.1111/1552-6909.12477'
    },
    {
      apaString: 'Hyderi, A., Angel, J., Madison, M., Perry, L. A., & Hagshenas, L. (2016). Transgender patients: Providing sensitive care. The Journal of Family Practice, 65(7), 450–461.'
    },
    {
      apaString: 'Marshall, A., Pickle, S., & Lawlis, S. (2017). Transgender medicine curriculum: Integration into an organ system–Based preclinical program. MedEdPORTAL Publications.13,10536. doi:10.15766/mep_2374-8265.10536'
    },
    {
      apaString: 'Porter, K. E., Brennan-Ing, M., Chang, S. C., Dickey, L. M., Singh, A. A., Bower, K. L., & Witten, T. M. (2016). Providing competent and affirming services for transgender and gender nonconforming older adults. Clinical Gerontologist, 39(5), 366–388. doi:10.1080/07317115.2016.1203383'
    }
  ]
};

let lesson0103: TextLesson = {
  title: 'Research',
  type: LessonType.Text,
  sections: [
    {
      header: 'Establishing Need',
      body: [
        'While Tyra Hunter may sound like an outlier in how bigotry and malfeasance came together to facilitate her death, it is important to remember that each incident taken on its own during the events leading up to her death are not individually rare.',
        'The review by Luisa Kcomt discussed in the previous lesson is far from the only such comprehensive look at the issues faced by transgender people in a healthcare setting, and there are also numerous smaller studies and patient narratives which reveal the issues faced by Ms. Hunter in 1995 are still present today. A few such studies will be highlighted here, with additional resources available in the citations section at the bottom of this page.'
      ]
    },
    {
      header: 'Mcphail, et. al: “Addressing gaps in physician knowledge regarding transgender health and healthcare through medical education” (2016)',
      body: [
        'This paper details a study of 30 transgender individuals and 11 physicians, using interviews and focus groups. The paper’s “overwhelming finding” was that there is a lack of provider knowledge, resulting in denial of care and impacting general care. It also identifies transphobia as another barrier to care. The authors go on to suggest several key recommendations, which will be discussed further in the concluding section of this unit.'
      ]
    },
    //TODO: Add more papers here.
  ],
  citations: [
    {
      apaString: 'Kcomt, L. (2018). Profound health-care discrimination experienced by transgender people: rapid systematic review. Social Work in Health Care, 58(2), 201–219. doi: 10.1080/00981389.2018.1532941'
    },
    {
      apaString: 'Mcphail, D., Rountree-James, M., & Whetter, I. (2016). Addressing gaps in physician knowledge regarding transgender health and healthcare through medical education. Canadian Medical Education Journal, 7(2). doi: 10.36834/cmej.36785'
    }
  ]
};

let lesson0104: TextLesson = {
  title: 'Introduction to Terminology',
  type: LessonType.Text,
  sections: [
    {
      header: 'Overview',
      body: [
        'One of the largest issues transgender and nonbinary patients face in accessing healthcare is in provider failure to understand the language of the transgender and nonbinary community. Being able to speak with patients accurately and inclusively can make all the difference in developing trust in the patient-provider relationship. Improper use of language can not only be othering, but actively harmful to patients mental or emotional wellbeing, far beyond what you may encounter with most patients. Of particular note are the exceedingly common interactions involving misgendering and deadnaming, which will both be discussed more in future units. Unfortunately, it is also common for medical terminology to lag behind social terminology, further complicating issues.',
        'In this unit we will only go over the most basic terms that should be known as a starting point to build upon for the following units, which each will provide a more robust look at terminology and communicating with transgender and nonbinary patients related to the topic of the unit.',
        'Before we continue, it must be understood that all terms should be self-applied. Never make assumptions that a word or phrase applies to an individual even if you are familiar with the common usage of a term and believe it applies, as ultimately these words are about personal identification rather than a strict definition. You should always allow a patient to state how they identify first, either through intake forms or directly in person, rather than labeling them yourself.'
      ]
    },
    {
      header: 'Transgender, Nonbinary, and Cisgender',
      body: [
        'There are three key terms that must be defined before anything else. <strong>Transgender</strong>, <strong>nonbinary</strong>, and <strong>cisgender</strong>. Most commonly, the word transgender refers to an individual whose gender identity does not align with the sex they were assigned at birth. Being nonbinary means that an individual’s gender identity is outside the male-female binary system. Nonbinary is not a third gender, but an encompassing term for someone who is at some point on a spectrum between male and female or neither male nor female at all. This may be in the form of a third gender, or it may be a statement of having no gender. Cisgender is a term that refers to someone whose gender identity aligns with their sex assigned at birth—that is to say, it is anyone who is not transgender or nonbinary. While it will eventually be given some qualifications to use, we employ the phrase “sex assigned at birth” here as starting terminology acknowledging what sex was observed at birth, in that it was a label applied by someone else base on observance of sex characteristics which did not accurately reflect an individual’s reality and which the individual had no say regarding.',
        '<div class="vocab-wrapper"><span class="vocab-term">Transgender</span><br><span class="vocab-def">Adjective describing someone whose gender identity does not align with their sex assigned at birth.</span></div>',
        '<div class="vocab-wrapper"><span class="vocab-term">Nonbinary</span><br><span class="vocab-def">Adjective describing someone whose gender identity is outside of the male-female binary. This is not a “third gender”.</span></div>',
        '<div class="vocab-wrapper"><span class="vocab-term">Cisgender</span><br><span class="vocab-def">Adjective describing someone whose gender identity  aligns with their sex assigned at birth.</span></div>'
      ]
    },
    {
      header: 'Identity',
      body: [
        'The term identity is another simple phrase that deserves extra attention, and it is often one that can cause people to misunderstand the nature of what it means to be transgender. Many erroneously believe that the phrase “identify as” indicates that someone is not actually that thing. For example, if one were to say, “I identify as a woman”, many people may see this as a less absolute statement than simply saying “I am a woman”. Yet, the Oxford dictionary defines identity as “The fact of being who or what a person or thing is”. This is an important definition. When we say a transgender or nonbinary person identifies as something, it means they are that thing, no less so than a cis person of that same identity. Identity is the key sense of a person as an individual. Even cisgender people have a gender identity, it is simply one that aligns with their sex assigned at birth.'
      ]
    },
    {
      header: 'Transgender vs. Nonbinary',
      body: [
        'The relationship between being transgender and nonbinary also deserves extra consideration, and this will be a topic that is returned to throughout the course. While many, if not most, people who identify as nonbinary also identify as transgender, this is not always the case. This illustrates a prime example of why approaching people individually is important. Some transgender people are nonbinary, some transgender people are binary. Some nonbinary people identify as transgender, some do not. Note that neither of these terms is indicative of whether or not someone is seeking medical transition, which will be discussed further in the following units as well.'],
      imageAsset: {
        'fileName': 'venndiagram.jpg',
        'position': ImageAssetPosition.below,
        'altText': 'Venn Diagram of Transgender and Nonbinary Overlap',
        'caption': 'This diagram is for illustrative purposes only and does not represent actual data.'
      }
    }
  ]
};

let lesson0105: QuizLesson = new QuizLesson(
  'General Concepts',
  [
    new MultipleChoiceQuestion(
      'According to McPhail, et. al, what are the two main factors in physicians denying care to transgender patients?',
      [
        'Lack of physician knowledge and transphobia.',
        'Lack of both resources and training.',
        'Religious beliefs and lack of training.',
        'Transphobia and lack of resources.'
      ],
      1,
      [
        'Mcphail, et. all cited lack of physician knowledge and transphobia as the reasons for denial of care.'
      ]
    ),
    new MultipleChoiceQuestion(
      'Presuming they all self identify as transgender, which of the following people should be considered transgender? ',
      [
        'Debbie (she/her), who was assigned male at birth, received an official diagnosis from a mental health professional, and has undergone multiple surgeries.',
        'Sam (he/him), who was assigned female at birth and identifies as a trans man, but does not desire hormone therapy or surgeries.',
        'Sarah (they/them), who was assigned female at birth, identifies as nonbinary, and presents feminine.',
        'All of the above.'
      ],
      4,
      [
        'If someone identifies as transgender, that person IS transgender, therefore all individuals above are considered transgender.'
      ]
    ),
    new TrueFalseQuestion(
      'All nonbinary people identify as transgender.',
      false,
      ['While (probably) most nonbinary people identify as transgender, not all do, and you should not use terms for your patients they do not self-identify with.']
    )
  ],
  [
    {
      apaString: 'Mcphail, D., Rountree-James, M., & Whetter, I. (2016). Addressing gaps in physician knowledge regarding transgender health and healthcare through medical education. Canadian Medical Education Journal, 7(2). doi: 10.36834/cmej.36785'
    }
  ]
);

let lesson0106: TextLesson = {
  title: 'Unit 1 Conclusion',
  type: LessonType.Text,
  sections: [
    {
      header: 'Study Recommendations',
      body: [
        'To close out this introductory unit we will return to the Mcphail, et al., paper to look at the recommendations from their study.',
        'These are the 9 recommendations provided by the study, which encompass providing basic information, training in language for interaction, major areas of medical care knowledge, suggestions on pedagogical approaches, and then an understanding of transphobia in society.',
        '<div class="block-quote-body"><p>Thus, based on our research and given the literature, we would recommend that curricular programs in medical schools be implemented that emphasized:</p><ol><li>A very basic overview on what “transgender” means and the health issues of trans people.</li><li>Training in language and proper pronoun use for interactions with patients. </li><li>Basic training    in    the    area    of    hormone prescription and monitoring hormones over time. </li><li>Basic   training   in   the   diagnosing   of   gender dysphoria in the clinical setting. </li><li>Discussions    regarding    proper    referral    for surgical procedures. </li><li>A varied pedagogical approach that includes lectures from medical experts in trans health, community    panels, case    studies, clinical exposure, role play, and standardized patient interaction. </li><li>Content that is delivered in specific sessions concentrating exclusively on trans health, and that is also interwoven throughout all of the medical curriculum in the form of case studies, for example. </li><li>Reflective exercises, small group activities, and lectures that allow for students to reflect upon their preconceived notions about gender and gender norms and the privileges and power that students themselves exercise as a result of systemic transphobia. </li><li>The systemic nature of transphobia in society, and how this founds and produces transphobia in the healthcare setting. </li></ol></div>',
        'For this course, we have opted to focus on the social recommendations. Predominantly, we will provide an overview of what it means to be transgender, training in in language and proper pronoun use for interaction with transgender patients, and an understanding of the nature of transphobia in society, all from a transgender perspective. While the hope is to eventually meet all of the recommendations here and then some, due to the resources available at this point in time focusing on those areas of content was deemed to be the area in education currently most lacking.'
      ]
    },
    {
      header: 'Moving to Unit 2',
      body: [
        'This is the end of unit 1. Unit 2 will cover more basic information on what it means to be Transgender and Transgender issues.'
      ]
    }
  ],
  citations: [
    {
      apaString: 'Mcphail, D., Rountree-James, M., & Whetter, I. (2016). Addressing gaps in physician knowledge regarding transgender health and healthcare through medical education. Canadian Medical Education Journal, 7(2). doi: 10.36834/cmej.36785'
    }
  ]
};

export const unit01: Unit = {
  title: 'Introduction',
  order: 1,
  lessons: [lesson0101, lesson0102, lesson0103, lesson0104, lesson0105, lesson0106]
};
