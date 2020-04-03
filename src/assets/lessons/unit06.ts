import {Unit} from '../../app/models/unit';
import {TextLesson} from '../../app/models/text-lesson';
import {LessonType} from '../../app/models/lesson';
import {MultipleChoiceQuestion, QuestionType, QuizLesson, TrueFalseQuestion} from '../../app/models/quiz-lesson';


let lesson01: TextLesson = {
  'title': 'Unit 6 Introduction',
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Welcome to Unit 6',
      'body': [
        'Unit 6 builds on the section on transitional care in unit 2 and provides extra details relevant to actual clinical care.'
      ]
    },
    {
      'header': 'DISCLAIMER',
      'body': [
        '<strong>This version of this unit was written by a non-clinician as a minimum viable product for demonstrative purposes. This should not be taken to be authoritative nor inform actual recommendations. Please consult the referenced papers and standards directly.</strong>'
      ]
    }
  ]
};

let lesson02: TextLesson = {
  'title': 'Standards of Care',
  'citations': [
    {
      'apaString': 'WPATH. (n.d.). Standards of Care for the Health of Transsexual, Transgender, and Gender Nonconforming People. Retrieved from https://www.wpath.org/media/cms/Documents/SOC v7/Standards of Care_V7 Full Book_English.pdf',
      'link': 'https://www.wpath.org/media/cms/Documents/SOC v7/Standards of Care_V7 Full Book_English.pdf'
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'WPATH',
      'body': [
        'WPATH is the World Professional Association of Transgender Health, formerly known as the Harry Benjamin International Gender Dysphoria Association. It should be clear at this point in this course why they rightfully changed their name as the understanding of transgender people improved.',
        'Historically, WPATH has been the dominant voice in transgender healthcare, and publishes their Standards of Care, the most recent being version 7 which was released in 2012.',
        'In recent years, WPATH has faced criticism and many believe that their Standards of Care have become far too dated in the 8 years since its release, or at the least their approach is often viewed as the most conservative approach.'
      ]
    },
    {
      'header': 'Content of the WPATH Standards of Care',
      'body': [
        'Due to the length, we will not provide full insight into the WPATH SoC here, given they weigh in at 120 pages. WPATH offers their SoC book at no cost on their website, the link to which is provided in the citations at the bottom of this page.'
      ]
    },
    {
      'header': 'Criticism',
      'body': [
        'The most important concept present in the standards is the requirement for “psychosocial assessment” even for hormone therapy. This is considered to be a form of gate keeping, denying people of life saving treatment if they cannot convince a mental health professional that they are transgender. Many have been turned away for not meeting biased standards of femininity or masculinity, and it has been common practice for people to feel the need to lie to receive their diagnosis, with the need for a diagnosis at all also considered to be insulting and dehumanizing.',
        'There are also serious concerns raised about their guidelines for trans youth, as their recommendations for options such as puberty blockers are considered overly strict and would only be prescribed after permanent changes from puberty had already begun.'
      ]
    }
  ]
};

let lesson03: TextLesson = {
  'title': 'Informed Consent',
  'citations': [
    {
      'apaString': ''
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'An Alternative Model of Care',
      'body': [
        'Informed consent has seen a growing adoption among specialists and some clinics, including organizations such as Planned Parenthood. The concept is not exclusive to trans healthcare of course, but nonetheless we will describe it here for the sake of thoroughness.',
        'Informed consent is the process of ensuring patients are provided with all relevant information and allowing them to make their own decision. This information includes potential risks, realistic expectations for effects, and so forth.',
        'Informed consent is most associated with hormone therapy, as it is considered low risk, though there are surgeons who will operate on an informed consent basis. Unfortunately, insurance carriers may sometimes require assessments to qualify for coverage for surgery, rendering the individual policies of surgeons meaningless in many cases.'
      ]
    }
  ]
};

let lesson04: TextLesson = {
  'title': 'Feminizing HRT',
  'citations': [
    {
      'apaString': 'Overview of feminizing hormone therapy. (2016, June 17). Retrieved from https://transcare.ucsf.edu/guidelines/feminizing-hormone-therapy',
      'link': 'https://transcare.ucsf.edu/guidelines/feminizing-hormone-therapy'
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Standard Regimen',
      'body': [
        'The typical assortment of medications for feminizing hormone replacement therapy consists of estrogen, a testosterone blocker, and sometimes progesterone. '
      ]
    },
    {
      'header': 'Estrogen',
      'body': [
        'Estrogen carries most of the weight and may be delivered through multiple means. Oral ingestion of pills is most common, though sublingual absorption of the pill is considered to have a stronger effect. For oral and sublingual Estradiol, the dosage is usually started at 2mg and increased to 4mg, with higher increases to 6mg and even 8mg as needed if liver health allows.',
        'Injections are harder to come by, but also used for patients when appropriate. It should be noted that many transgender women believe that injections provide better results, though this has not been empirically proven, and many providers do not necessarily accept this as truth. Nonetheless, you should be prepared for requests for injections by many patients for this reason.',
        'Topical solutions such as creams and patches are also available.'
      ]
    },
    {
      'header': 'Testosterone Blockers',
      'body': [
        'The most common testosterone blocker used in the U.S. is Spironolactone, which is provided orally. The initial dosage is typically 50 mg once per day, going up to 200 mg which may or may not be split. While 200mg is the recommended maximum, some patients with higher testosterone may require more aggressive dosing.',
        'Finasteride can be used to supplement Spironolactone, particularly if the patient is interested in improved scalp hair regrowth. The dosage here varies and may be given at either the 1 mg Propecia dose or the 5mg Proscar dose depending on the patient’s goal.'
      ]
    },
    {
      'header': 'Progesterone',
      'body': [
        'Progesterone is not empirically shown to have any impact on success of hormone therapy, though many patients have reported benefits in breast growth. Some patients also report improved mood and libido while taking progesterone over just estrogen and a testosterone blocker. While it is not necessary to offer progesterone as part of initial therapy, there is no reason not to provide it to patients who are interested.'
      ]
    },
    {
      'header': 'General Effects',
      'body': [
        'The expected effects of feminizing HRT: <ul><li>Fat redistribution, including facial features, to a more feminine distribution.</li><li>Altered sweat/body odor smell.</li><li>Increased sensitivity of touch, including temperature.</li><li>Increased sense of smell.</li><li>Muscle loss.</li><li>Decreased libido.</li><li>Decreased sperm count/loss of fertility.</li><li>Breast growth.</li><li>Decrease in body hair.</li></ul>',
        'The timeline can vary significantly, with changes beginning in the first 6 months and continuing for at least 2 to 3 years. Many transgender people report changes continuing well past that however, including “spurts” of breast growth in years 4 and 5 that exceeded their previous growth.'
      ]
    }
  ]
};

let lesson05: TextLesson = {
  'title': 'Masculinizing HRT',
  'citations': [
    {
      'apaString': 'Overview of masculinizing hormone therapy. (2016, June 17). Retrieved from https://transcare.ucsf.edu/guidelines/masculinizing-therapy',
      'link': 'https://transcare.ucsf.edu/guidelines/masculinizing-therapy'
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Standard Regimen',
      'body': [
        'Unlike feminizing HRT, masculinizing HRT only requires the use of testosterone which also provides a suppressive effect on estrogen.'
      ]
    },
    {
      'header': 'Testosterone',
      'body': [
        'Testosterone can be administered through injections and topical methods, with intramuscular injections being the most common. Injectable doses start at 20mg to 50mg per week, and typically topping out at 100mg per week. Doses do not vary from this for most topical options.'
      ]
    },
    {
      'header': 'General Effects',
      'body': [
        'The expected effects of masculinizing hormone therapy are:<ul><li>Fat redistribution, including facial fat, to a more masculine distribution.</li><li>Development of facial and body hair. </li><li>Deepening of voice. </li><li>Increased muscle mass. </li><li>Change in sweat and body odor. </li><li>Potential hairline recession or general androgenic alopecia. </li><li>Increase in libido. </li><li>Clitoral growth. </li><li>Vaginal dryness. </li><li>Cessation of menses. </li><li>Long term fertility may be impact. </li></ul>'
      ]
    }
  ]
};

let lesson06: TextLesson = {
  'title': '“Top Surgery” and Binding',
  'citations': [
    {
      'apaString': 'Top surgery for transgender women. (2019, October 4). Retrieved from https://www.mayoclinic.org/tests-procedures/top-surgery-for-transgender-women/about/pac-20470693',
      'link': 'https://www.mayoclinic.org/tests-procedures/top-surgery-for-transgender-women/about/pac-20470693'
    },
    {
      'apaString': 'Top surgery for transgender men. (2019, September 27). Retrieved from https://www.mayoclinic.org/tests-procedures/top-surgery-for-transgender-men/about/pac-20469462',
      'link': 'https://www.mayoclinic.org/tests-procedures/top-surgery-for-transgender-men/about/pac-20469462'
    },
    {
      'apaString': 'Underwood, T. (2017, July 7). A Complete Guide to Chest Binding for Trans Men. Retrieved from https://ftm-guide.com/complete-guide-to-chest-binding-for-trans-men/',
      'link': 'https://ftm-guide.com/complete-guide-to-chest-binding-for-trans-men/'
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Breast Augmentation',
      'body': [
        'Unfortunately, many transgender women or trans feminine people do not obtain the breast size they view through HRT alone. This can be further complicated by a relatively wideset chest structure developed from undergoing testosterone driven puberty. Breast augmentation through implants, and sometimes supplemented by using liposuction on other parts of the body and transferring it to breasts. The procedure is equivalent to that performed on cis patients otherwise, and individual patients by benefit from different techniques in the same fashion.',
        'While there are no consistent time frames, it is generally recommended that a transgender woman/trans feminine person seeking breast augmentation wait until the period after starting hormone therapy in which breast growth will typically cease. While many transgender women on hormone therapy report continued growth, sometimes several cup sizes worth, as many as 4 to 5 years into hormone therapy, the general consensus is around the 18 month to 2 year period is a reasonable time to wait without it being considered ill-advised or rushed, though as with all time frames this may be heavily individualized, and it is necessary to assess each patient’s progress on their own merits. For example, if an individual has difficulties suppressing testosterone or raising estrogen levels, it may delay their effects. Therefore, judgment should be made from a reasonable point at which targeted hormone levels have been stabilized.'
      ]
    },
    {
      'header': 'Breast Reduction',
      'body': [
        'Breast reduction for transgender men/trans masculine people is performed via a standard subcutaneous mastectomy. Depending on the size of the breasts, efforts may be made to spare the skin as well as nipples and areolas, though in many cases they made need to be grafted back to the proper position.'
      ]
    },
    {
      'header': 'Binding',
      'body': [
        'Prior to breast reduction, many trans men/trans masculine people will bind their breasts to flatten their appearance. This is done via heavy constriction with tight clothing or restrictive devices, sometimes which are homemade. Unfortunately, this can cause safety issues with also compressing the heart and lungs if done improperly. It is important that you speak with your patients about binding and let them know how to take proper precautions, such as taking breaks or not binding while asleep. Unless you have specific underlying concerns about an individual, such as with underlying medical conditions, you should never attempt to asway your patients from binding and instead try to work with them to decrease risks, while showing understanding of their situation. As despite the risks, there are immense psychological and emotional benefits, and your patients are very aware that these sorts of actions are not undertaken lightly.'
      ]
    }
  ]
};

let lesson07: TextLesson = {
  'title': '“Bottom Surgery” Introduction',
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Meaning and Synonyms',
      'body': [
        'Bottom surgery is simply a catch all/umbrella term and euphemism for surgery involving the genital area. The bottom surgery euphemism covers a number of other terms, which may have varied degrees of stigma attached but are still not typically considered offensive in proper context. The more general terms include sex reassignment surgery (SRS), which is probably the best known historically used phrase, and gender confirmation surgery (GCS), which while has some philosophical concerns surrounding it is likely the most common abbreviation you will see now. Then there are of course the medical terms for specific procedures, such as phalloplasty or vaginoplasty.'
      ]
    }
  ]
};

let lesson08: TextLesson = {
  'title': 'Feminizing “Bottom Surgery”',
  'citations': [
    {
      'apaString': 'Bottom Surgery: What You Need to Know. (n.d.). Retrieved from https://www.healthline.com/health/transgender/bottom-surgery#mtfmtn-bottom-surgery',
      'link': 'https://www.healthline.com/health/transgender/bottom-surgery#mtfmtn-bottom-surgery'
    },
    {
      'apaString': 'Transfeminine Bottom Surgery. (n.d.). Retrieved from https://healthcare.utah.edu/transgender-health/gender-affirmation-surgery/vaginoplasty.php ',
      'link': 'https://healthcare.utah.edu/transgender-health/gender-affirmation-surgery/vaginoplasty.php '
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Vaginoplasty',
      'body': [
        'The primary feminizing bottom surgery is a vaginoplasty, in which a neo vagina is constructed out of the penis or other tissue. There are multiple, highly varied, approaches to this surgery. The best known is the penile inversion technique, where the skin from the penis is used to fashion the neovagina. The second most well known is the sigmoid colon vaginoplasty, which uses a colon graft. The abundance of mucosal tissue involved often results in super lubrication over the basic penile inversion method. A newer technique that shows long term promise utilizes the peritoneal lining in a similar fashion, avoiding some of the complications with the colon graft and anecdotally superior results.',
        'Variations on technique will produce fairly notable differences in results patient to patient surrounding depth, sensation, ability to orgasm, and natural lubrication.',
        'In order to maintain depth after surgery, an extended maintenance period of dilation is required, often beginning at a frequency of multiple times a day for 30 minutes, though decreasing throughout recovery. Occasional sexual penetration is usually considered sufficient at a certain point later in recovery, and some patients report never requiring dilation without loss of depth once fully recovered.'
      ]
    },
    {
      'header': 'Vulvoplasty',
      'body': [
        'A vulvoplasty is an alternative to a full vaginoplasty for those not interested in sexual penetration which carries less recovery time and potential complications. It fashions everything but the vaginal canal. Clitoral sensation is still possible with a vulvoplasty.'
      ]
    },
    {
      'header': 'Orchiectomy',
      'body': [
        'An orchiectomy, often abbreviated as orchi, is a relatively simple procedure to remove the patient’s testicles, and is often done as a precursor to more complex surgeries for patients who cannot use or wish to cease use of testosterone inhibitors as part of hormone therapy.'
      ]
    },
    {
      'header': 'Labiaplasty',
      'body': [
        'Labiaplasties are often performed to do cosmetic revisions after a certain point in recovery from other procedures, in order to fashion natural looking external labia.'
      ]
    }
  ]
};

let lesson09: TextLesson = {
  'title': 'Masculinizing “Bottom Surgery”',
  'citations': [
    {
      'apaString': 'Boskey, E. (2018, December 11). The Difference Between a Metoidioplasty and a Phalloplasty. Retrieved from https://www.verywellmind.com/what-is-a-metoidioplasty-4153084',
      'link': 'https://www.verywellmind.com/what-is-a-metoidioplasty-4153084'
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Metoidioplasty and Phalloplasty',
      'body': [
        'The two primary options for bottom surgery for trans men/trans masculine people are metoidioplasty and phalloplasty. Each has unique advantages over the other.',
        'For a Metoidioplasty, the clitoris which has been enlarged through the use of hormone replacement therapy is used to create a phallus. The resulting phallus is typically between 5 to 7 centimeters, which may be considered insufficient depending on the needs of the patient. With urethral lengthening, the patient can urinate through the created phallus. Plastic surgery is used to sculpt the shape to resemble the glans of a penis. Sensitivity is typically maintained, and erections can occur naturally without the need for prosthesis.',
        'Phalloplasty provides a notably longer phallus for patients who wish to penetrate their partner, though comes with a number of complications and less natural function. It is also typically considered to look more realistic, though this is a highly subjective consideration.'
      ]
    },
    {
      'header': 'Other Procedures',
      'body': [
        'In addition to the genital surgery itself, trans men/trans masculine people may also undergo hysterectomies and ovariectomies.'
      ]
    }
  ]
};

let lesson10: QuizLesson = new QuizLesson(
  'Clinical Care',
  [
    new MultipleChoiceQuestion(
      'Which of the following are considered “bottom surgery”?',
      [
        'Vaginoplasty',
        'Metoidioplasty',
        'Phalloplasty',
        'All of the above'
      ],
      4,
      [
        'All of the procedures listed here are a form of bottom surgery.'
      ]
    ),
    new TrueFalseQuestion(

      'According to the WPATH Standards of Care, an official diagnosis is required for treatment.',
      true,
      ['WPATH\'s SoC is considered a relatively conservative set of guidelines, which has resulted in historical issues of "gatekeeping" transgender identities.']
    ),
    new TrueFalseQuestion(
      'Sublingual is considered more effective than oral when using estradiol pills.',
      true,
      ['Sublingual dosing is considered not only more effective, but also safer, causing less potential for increasing liver enzymes.']
    )]
);

let lesson11: TextLesson = {
  'title': 'Unit 6 Conclusion',
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Moving to Unit 7',
      'body': [
        'Unit 7 is the final unit, and is designed to pull the lessons from the previous lessons together in order to inform recommendations about creating an explicitly inclusive environment for your patients, as well as how to speak about these issues out in the world in a personal capacity. To truly better the lot of transgender and/or nonbinary patients, it requires large scale social change in which everyone must play a part.'
      ]
    }
  ]
};

export const unit06: Unit = {
  title: 'Clinical Care',
  order: 6,
  lessons: [lesson01, lesson02, lesson03, lesson04, lesson05, lesson06, lesson07, lesson08, lesson09, lesson10, lesson11]
};
