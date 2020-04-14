import {Unit} from '../../../projects/simple-course-core/src/lib/models/unit';
import {TextLesson} from '../../../projects/simple-course-core/src/lib/models/text-lesson';
import {LessonType} from '../../../projects/simple-course-core/src/lib/models/lesson';
import {MultipleChoiceQuestion, QuizLesson, TrueFalseQuestion} from '../../../projects/simple-course-core/src/lib/models/quiz-lesson';
import {ImageAssetPosition} from '../../../projects/simple-course-core/src/lib/models/image-asset';


let lesson01: TextLesson = {
  'title': 'Unit 4 Introduction',
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Welcome to Unit 4',
      'body': [
        'Unit 4 will touch on some sensitive topics involving society and the treatment of transgender/nonbinary people, mostly in the form of marginalization/discrimination. Many aspects of this topic are touched upon in other units and may be summarized again here.'
      ]
    },
    {
      'header': 'Discussion of Nonbinary Issues',
      'body': [
        'Unfortunately, the overwhelming number of studies focus exclusively on transgender as a demographic, without typically accounting for nonbinary people who face marginalization who do not identify as transgender. For the sake of accuracy to the data, for each section of this unit we will use the language which matches the information cited. This is done so with the explicit recommendation that future reports and research on the topics herein need to do far better about accounting for nonbinary people who do not identify as transgender.',
        'In addition, there is a similar conflation in some studies with gender non-conforming, though to a far lesser extent.'
      ]
    }
  ]
};

let lesson02: TextLesson = {
  'title': 'Transphobia',
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'What is Transphobia?',
      'body': [
        'As with homophobia, transphobia is not typically a phobia or a fear of transgender people but rather holding prejudice against transgender people. Much of transphobic rhetoric is repackaged homophobic rhetoric, particularly in regards to treating transgender people as predators as will be discussed momentarily.',
        'The forms that transphobia takes can be very broad, and it is often manifested against different groups of transgender or nonbinary people in specific ways.  Transgender women typically receive the most overt transphobia, receiving high rates of violence and sexual assault as well being accused of being predators, labeled as rapists and pedophiles. For transgender men, while often less overt, transphobia can be perhaps even more damaging, as they often face subversive discrimination which can get lost underneath the overt actions against trans women. Essentially, transgender men may find themselves infantilized and their unique struggles ignored, even among allies, simply because of the fact that the attacks on transgender women are more obvious, all while their identities are being undermined and invalidated. In all cases, there are strong elements of misogyny at play. For transgender women, this can come into play in many forms, such as cultural beauty standards. For transgender men, by the very fact they were assigned female at birth transphobic people, whose bigoty often goes hand in hand wither other bigotries, they are dismissed as incapable. Of course, these are very broad summaries of only some examples of transphobia that trans men or women may face, and it can take countless more specific forms.',
        'Nonbinary people typically receive the same discriminatory treatment as binary trans men and women, based on factors such as gender assigned at birth or presentation, though also face added challenges which were discussed somewhat in Unit 3. For example, they may face judgment or ridicule over their identity or pronouns, being both overt and subversive at the same time. Even from within the transgender community, they face an alarming amount of dismissal of their identities, and some will accuse them of pretending or being a part of a trend. This last point is not restricted to nonbinary people however and is applied against binary people who do not conform to certain expectations about transition as well, particularly surrounding the presence, or rather lack thereof, of dysphoria.',
        'The most common terms to summarize this view are “transmedicalist” or “truscum”.'
      ]
    },
    {
      'header': 'Transmedicalism',
      'body': [
        'Transmedicalism is the belief that one requires dysphoria to be transgender, and that being transgender is a medical condition which must be treated. Transmedicalists may favor the word transsexual over transgender for non-generational reasons. While truscum and transmedicalist are intended as pejoratives, they sometimes call themselves those terms a point of pride. The term truscum is a portmanteau of “true” and “scum”, with the word true being a reference to that such people consider themselves to be “true transgenders/transsexuals”, while others are claiming to be transgender and/or nonbinary as a social trend. (The term they use as a pejorative against such people is “transtrender”.) Anecdotally, the majority of transmedicalists are transgender women and it is heavily associated with conservative political beliefs.',
        'The goal of this course is to be all inclusive for the sake of providing context to support all transgender and/or nonbinary patients, and transmedicalism is at direct odds with this philosophy. However, this should not inform patient care, and such individuals also deserve the medical support they need. As such, we will recommend that this be a topic avoided entirely with your patients. Do not take sides on whether or not being transgender is a medical condition to be cured or any specific requirements for being transgender. Serve all your patients equally, and do not inject your own beliefs on this topic into your care (and given the topic is explicitly about medical care, you likely do have an opinion).',
        'It is additionally worth noting that if lacking exposure to the larger transgender community, many transgender people may hold views which would be called transmedicalist early in their transition as a sort of default understanding. YAs such, you may encounter these beliefs more commonly among patients are who are newly out. In any case, the same guideline applies in that it is not a topic to give any input regarding, and it is best to let your patients guide themselves through social interactions on this issue.'
      ]
    }
  ]
};

let lesson03: TextLesson = {
  'title': 'Poverty and Other Issues',
  'citations': [
    {
      'apaString': 'Edmonds, J. (2016, December 9). Transgender People are Facing Incredibly High Rates of Poverty. Retrieved from https://nwlc.org/blog/income-security-is-elusive-for-many-transgender-people-according-to-u-s-transgender-survey/'
    },
    {
      'apaString': 'Fitzgerald, E., Elspeth, S., Hickney, D., & Biko, C. (2015). Meaningful Work: Transgender Experiences in the Sex Trade. Retrieved from https://www.transequality.org/sites/default/files/Meaningful Work-Full Report_FINAL_3.pdf '
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Poverty Among Transgender People',
      'body': [
        'When it comes to social issues, there are few more complete sources of data than the 2015 U.S. Transgender Survey by the National Center on Transgender Equality. One of the starkest findings is the poverty rate among many transgender demographics reported at 29%. For contrast, the overall poverty rate in the United States in 2015 was reported to be 14%. The numbers were more shocking still for transgender people of color at: 43% for Latinx respondents, 41% for American Indian respondents, 40% of multi-racial respondents, and 38% of black respondents.',
        'Additionally, over half of transgender people living with HIV and almost half of transgender people with disabilities lived in poverty during the survey.',
        'To make matters worse, there was documented difficulty receiving social aid, which the National Women’s Law Center summarizes the findings regarding as follows.',
        '<div class="block-quote-body"><p>In addition to experiencing poverty at higher rates than the general population, people who are transgender or gender non-conforming had difficulties accessing the income supports and other safety nets that would help them overcome poverty. Nearly one in five respondents reported that they had received negative treatment, including being denied equal treatment or service, verbally harassed, or physically attacked, when they went to a public assistance or government benefits office. Over one in ten transgender people reported negative treatment at a Social Security office. Fourteen percent of transgender people had experienced negative treatment at the Department of Motor Vehicles and 13 percent had experienced negative treatment at a courthouse.</p></div>'
      ]
    },
    {
      'header': 'Sex Work',
      'body': [
        'The National Center for Transgender Equality found that 12.8% of transgender people had participated in the sex trade, 14.9% of transgender women specifically. Exact figures in the same vein of defining the sex trade among the general populace were unavailable. However, it is reported that roughly 1% of women in the United States have engaged in prostitution, though this should be considered a flawed comparison it still provides some level of general context for the numbers among transgender people being extremely high.'
      ]
    }
  ]
};

let lesson04: TextLesson = {
  'title': 'Violence and Hate Crimes',
  'citations': [
    {
      'apaString': 'Transgender Day of Remembrance. (n.d.). Retrieved from https://tdor.info/'
    },
    {
      'apaString': 'Fitzsimons, T. (2019, November 20). Transgender Day of Remembrance: At least 22 trans people killed in 2019. Retrieved from https://www.nbcnews.com/feature/nbc-out/transgender-day-remembrance-least-22-trans-people-killed-2019-n1086521'
    },
    {
      'apaString': 'Lesbian, Gay, Bisexual, Transgender, Queer and HIV-Affected Hate and Intimate Partner Violence in 2017. (n.d.). Retrieved from http://avp.org/wp-content/uploads/2019/01/NCAVP-HV-IPV-2017-report.pdf '
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Murder and the Transgender Community',
      'body': [
        'In 2019, there were 26 cases of identified transgender people who faced fatal violence, overwhelmingly being transgender women of color. While this may seem like a relatively small number, it is difficult to place this number in the context of larger homicide rates due to serious limitations in the data available, and it is not intended to indicate a statistical rate.'
      ]
    },
    {
      'header': 'Identifying Hate Crimes',
      'body': [
        'The FBI has said that hate crimes have been on the rise in recent years, hitting a 27 year high in 2018, and these numbers are likely heavily underreported. Unfortunately, truly accurate numbers are difficult to come by, an issue discussed in a complimentary report by the National Coalition of Anti-Violence Programs. One notable issue in regards to the transgender community is that the data is obscured by law enforcement and media using legal genders and deadnames, stifling the detection of transgender people in the data.'
      ]
    },
    {
      'header': 'The Transgender Day of Remembrance',
      'body': [
        'To deal with the fear and grief and remind everyone of the victims of hate crimes against transgender people, the community has yearly held the “Transgender Day of Remembrance” since 1999, during which transgender people and allies gather to honor those lost.'
      ]
    }
  ]
};

let lesson05: TextLesson = {
  'title': 'Legal Discrimination and Legislation',
  'citations': [
    {
      'apaString': 'The Gay/Trans Panic Defense: What It is, and How to End It. (n.d.). Retrieved from https://www.americanbar.org/groups/crsj/publications/member-features/gay-trans-panic-defense/'
    },
    {
      'apaString': 'Heffermen, B. (2019, September 26). Opinion: Gay Panic Defenses must be banned in Louisiana. Retrieved from https://loyolamaroon.com/10023963/showcase/gay-panic-defenses-must-be-banned-in-louisiana/#'
    },
    {
      'apaString': 'Kralik, J. (n.d.). Retrieved from https://www.ncsl.org/research/education/-bathroom-bill-legislative-tracking635951130.aspx'
    },
    {
      'apaString': 'Human Rights Campaign. (n.d.). Transgender Military Service. Retrieved from https://www.hrc.org/resources/transgender-military-service'
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': ' The “Trans Panic” Defense',
      'body': [
        'The Gay or Trans Panic Defense is an accepted legal defense which blames the defendant’s action in a criminal trial on the victim, including against murder. As recently as 2019 it was successfully used in a murder case in Louisiana by James Dixon regarding the murder of a 21-year-old transgender girl, Islan Nettles. There is an effort to introduce legislation to ban the defense from LGBTQ+ and Trans rights groups, but so far it remains legal in an overwhelming 42 states.'
      ],
      'imageAsset': { fileName: 'bannedtranspanicstates.png', position: ImageAssetPosition.below, caption: 'States in which the Gay/Trans Panic Defense is banned.', altText: 'Map of the states in which the gay/trans panic defense is banned.' }
    },
    {
      'header': 'Bathroom Bills',
      'body': [
        'One of the better-known sets of anti-trans legislations are so called “Bathroom Bills”, which attempt to restrict restrooms, locker rooms, and so forth on the basis of sex assigned at birth. North Carolina is the only state to successfully pass such a bill in 2017, though it has since been repealed. (Though not after cases where even gender nonconforming cis women were violently attacked for using women’s restrooms.) The National Conference of State Legislatures (NCSL) records sixteen states which have considered bathroom bills, with some also considering legislation to explicitly pre-empt county and municipal laws on discrimination.'
      ]
    },
    {
      'header': 'Transgender Military Ban',
      'body': [
        'Transgender people were banned from service for decades leading up to 2015, during which the Pentagon announced they were developing a policy to change that, which was then put into place officially in June of 2016. The Trump Administration reinstated the ban in July of 2017, again disenfranchising thousands of transgender service members.'
      ]
    }
  ]
};

let lesson06: TextLesson = {
  'title': 'Anti-Transgender Groups/Organizations',
  'citations': [
    {
      'apaString': 'American College of Pediatricians. (n.d.). Retrieved from https://www.splcenter.org/fighting-hate/extremist-files/group/american-college-pediatricians'
    },
    {
      'apaString': 'Anti-LGBTQ. (n.d.). Retrieved from https://www.splcenter.org/fighting-hate/extremist-files/ideology/anti-lgbtq'
    },
    {
      'apaString': 'Diavolo, L. (2020, February 10). Trans Youth Are Being Targeted With State Laws. Retrieved from https://www.teenvogue.com/story/transgender-youth-targeted-state-laws-south-dakota-several-states'
    },
    {
      'apaString': 'Fitzsimons, T. (2019, February 13). Conservative group hosts anti-transgender panel of feminists \'from the left\'. Retrieved from https://www.nbcnews.com/feature/nbc-out/conservative-group-hosts-anti-transgender-panel-feminists-left-n964246'
    },
    {
      'apaString': 'Proud Boys. (n.d.). Retrieved from https://www.splcenter.org/fighting-hate/extremist-files/group/proud-boys'
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': '“Anti-Transgender” vs “Hate”',
      'body': [
        'The phrase “anti-transgender” is used here to avoid generalizing all of the groups discussed with the phrase “hate group” (as well as to avoid potential legal complications to be frank), and that labeling will only be used when citing categorization as a hate group by the Southern Poverty Law Center (SPLC).',
        'It should be stated that most of these groups are considered “Anti-LGBTQ” rather than specifically “Anti-Transgender”, as homophobia and transphobia are heavily intertwined as has been previously referenced. However, given the current political climate in which transgender people are an easier target, there is often a public focus on attacking transgender people rather than sexuality. In almost every case, even if these groups only publicly engage in anti-transgender actions or rhetoric, they are almost certainly also anti-LGBTQ in general.',
        'For more information on individual groups, please reference the citation on this page directing you to the SPLC website’s list of Anti-LGBTQ hate groups whenever a specific citation about that group is not provided.'
      ]
    },
    {
      'header': 'American College of Pediatrics',
      'body': [
        'The American College of Pediatrics is a fringe group who attempts to masquerade as a legitimate academic and medical organization, and their name is of course to create confusion with the American <em>Academy</em> of Pediatrics. They have become a major publisher (lacking any peer review) of anti-transgender propaganda and are known for repeatedly comparing the entire LGBTQ community to pedophiles, and their papers are often cited by far right political . They have been publicly called out for what they are by multiple legitimate and respected medical organizations.'
      ]
    },
    {
      'header': 'WOLF and  “Gender Critical Feminists”/“Trans Exclusionary Radical Feminists”',
      'body': [
        'There are perhaps no groups more virulent and subversive in acting against transgender rights than those colloquially labeled as Trans Exclusionary Radical Feminists, or TERFs. While modern feminism is explicitly transgender inclusive, often referred to as Intersectional Feminism, Trans Exclusionary Radical Feminists are philosophically descended if not simply actual hold overs from elements of earlier feminist waves. While it would be impossible to provide even an abridged history of the feminist movement in this context, many of the individuals who have found new relevance in the modern area with anti-transgender rhetoric were largely driven out of the broader feminist movement during the “feminist sex wars” over divisive debates about topics surrounding sexuality, leading into the rise of Intersectional Feminism. (One notable addendum here is that most “TERFs” are also Sex Worker Exclusionary, or “SWERFs”, a legacy of the debates decades ago.) These groups crouch their anti-transgender rhetoric behind radical feminist philosophy, and to the uninformed it can legitimize their messages of hate among people who would not give other groups, such as those on the political right, the time of day. Despite the fact it was a self-applied moniker, they have propagandized the use of the purely descriptive label TERF claiming it is a slur used to supposedly “silence women” and attempted to rebrand themselves as “Gender Critical”. Gender Critical is intended to mean that gender does not exist, only “biological sex”. Harkening back to discussions in this course about sex vs. gender, they thus use arbitrarily defined strict definitions of sex and essentialist phrasing to make claims about transgender women being “colonizers” and “predators”. Claims which mirror right wing organizations. For example, they posit that transgender inclusive restroom legislation is a conspiracy by predatory men posing as women to gain access to young girls, a claim that has been proven empirically false. Their most vicious attacks are directed overwhelmingly at transgender women, though their claims that transgender men and nonbinary people assigned female at birth have been brainwashed or otherwise manipulated are not to be underestimated in the harm they do.',
        'For the most part, Trans Exclusionary Radical Feminism has not become widespread in the United States, though it has an extremely strong hold across the United Kingdom, including in even liberal media, and their online presence has become hugely destructive around the world. One U.S. based group that is worth mention is “WOLF”, or “Women’s Liberation Front”. Originally formed to sue the Obama Administration over its Title IX directives regarding transgender people using the bathrooms related to their gender identity, they have made it a point to show up wherever there is anti-transgender legislation in an attempt to legitimize it as more than just a right wing action. Most recently, they participated in the hearings for the now failed but still infamous South Dakota anti-transgender youth bill in February of 2020. Because of these sorts of actions, a strong alliance has been built between right wing organizations and trans exclusionary radical feminists, with the Heritage Foundation actively inviting them to speak and providing funding.',
        'These groups and their allies are largely unique in that there exists a no small amount of LGB people among them, including a handful of transgender people (often those who are labeled as transmedicalist). There even exists an (extremely small) U.K based group called LGB Alliance which asserts they are a movement of LGB people who are freeing themselves from the T. Unfortunately, even in the United States, they have had an increasingly notable presence at pride events in both participatory and hostile capacities. In response, many LGBTQ organizations have fought back by using the slogan “L with the T”, “G with the T”, and so forth.'
      ]
    },
    {
      'header': 'White Nationalist, Neo-Nazi, and Fascist Organizations',
      'body': [
        'It will come as no surprise that transgender people are major targets for white supremist/nationalist groups, who engage in overt violence against the entire LGBTQ community. Examples of the most overt of these groups include the Three Percenters, Oath Keepers, and Atomwaffen. This also includes organizations such as the Proud Boys, who attempt to maintain a more moderate façade but are still considered to be a neo-fascist hate group by the SPLC.'
      ]
    }
  ]
};

let lesson07: TextLesson = {
  'title': 'Ray Blanchard',
  'citations': [
    {
      'apaString': '[On Blanchard’s Resignation from WPATH] (n.d.). Retrieved from http://ai.eecs.umich.edu/people/conway/TS/BaileyAssociates/BlanchardResigns.html'
    }
  ],
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'A Note about this Lesson',
      'body': [
        'There are many people in the history of transgender healthcare who warrant criticism for their roles in the marginalization of transgender people, but Blanchard is unique in that his work was both relatively recent and still influential in some circles. His is a name you may encounter, and it was thus deemed that he was worth special mention.'
      ]
    },
    {
      'header': 'Blanchard’s Typology',
      'body': [
        'Ray Blanchard is a controversial American-Canadian psychologist, notorious for his “Typology of Transsexualism” in which he posited the theory of “autogynephilia” among transgender women, which claims that transgender women are simply men who have a fetish thinking of themselves with a vagina. ',
        'This course unequivocally denounces Blanchard’s work, including the very concept of autogynephilia, as absurdly flawed and extraordinarily offensive, not even worthy of laying out the case against. This is a view held by the overwhelming majority of the transgender community, and if you wish to maintain any trust among your transgender/nonbinary patients, you should never consult his work. Neither should credence be given to the man himself or his views outside of the Typology, given that Dr. Blanchard has spent the last years attacking transgender people on social media and providing interviews to alt-right news outlets such as Quillette. The only reason he is mentioned here at all is that anti-transgender groups will often cite him as evidence for their bigotry. To provide some evidence of these assertions, the citations section of this page includes a link to University of Michigan website which contains an excerpt from communications regarding Blanchard’s departure from what is now known as WPATH, the World Professional Association of Transgender Health, including examples of his subsequent defamations against transgender women in the media.',
        ''
      ]
    }
  ]
};

let lesson08: QuizLesson = new QuizLesson('Discrimination Concepts',
  [
    new TrueFalseQuestion(
      'Transgender people are not allowed to serve openly in the United States military.',
      true,
      ['A transgender military ban was reenacted in 2017, after a mere 13 months of transgender service members being allowed to serve openly.']
    ),
    new MultipleChoiceQuestion(
      "What of these statements are true?",
      [
        "Feminism has always been transgender inclusive.",
        "Different feminist waves have had differing views of transgender people, transgender women in particular.",
        "Most modern feminists are transgender inclusive, though there are some elements of feminism who are virulently anti-transgender.",
        "B and C are TRUE",
        "All answers are TRUE"
      ],
      4,
      ['Intersectional Feminism is the most dominant modern feminist philosophy, which is trans inclusive. Some earlier feminist philosophy was not. (Lack of trans inclusivity was only a small part of the criticism of the associated wave of feminism, as it was considered to be overwhelming centered around straight, middle class, white women while being dismissive of the concerns of those who faced multiple forms of marginalization.)']
    ),
    new TrueFalseQuestion(
      "The “Gay/Trans Panic Defense” is not an accepted legal defense in any state.",
      false,
      ["The “Gay/Trans Panic Defense” is a valid legal defense in 42 states."]
    )
  ],
  undefined);

let lesson09: TextLesson = {
  'title': 'Unit 4 Conclusion',
  'type': LessonType.Text,
  'sections': [
    {
      'header': 'Moving to Unit 5',
      'body': [
        'Unit 5 discusses Sexuality as it relates to Gender Identity, and the role of Transgender and/or Nonbinary people in the LGBTQ+ community.'
      ]
    }
  ]
};

export const unit04: Unit = {
  title: 'Society and Marginalization',
  order: 4,
  lessons: [lesson01, lesson02, lesson03, lesson04, lesson05, lesson06, lesson07, lesson08, lesson09]
};
