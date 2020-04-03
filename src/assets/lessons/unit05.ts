import {Unit} from '../../app/models/unit';
import {QuestionType} from '../../app/models/quiz-lesson';
import {LessonType} from '../../app/models/lesson';
import {TextLesson} from '../../app/models/text-lesson';
import {Position} from '../../app/models/image-asset';

let lesson01: TextLesson = {
  "title": "Unit 5 Introduction",
  "type": LessonType.Text,
  "sections": [
    {
      "header": "Welcome to Unit 5",
      "body": [
        "Welcome to Unit 5, Gender Identity and Sexuality. This unit will discuss the correlation between gender identity and sexuality, as well as provide context for being transgender among the broader LGBTQ+ community. We will begin by providing general definitions for different sexualities to provide foundational information for the following lessons."
      ]
    },
    {
      "header": "The LGBTQ+ Acronym",
      "body": [
        "For logistical reasons, you will see LGBTQ+ written as such the majority of the time, if not simply abbreviated further to LGBT. In its full form, this acronym can become very, very long. It is very important to understand that this is born of convention, and neither the order in which the acronym is listed nor the inclusion of a letter in the abbreviated form are any statement of relative importance. Someone who is Asexual is just as important as someone who is Lesbian, Gay, or Bisexual.",
        "Note that you may also see variations such as GLBT(Q+), placing the ‘G’ first, though in the United States the order is overwhelmingly given with the ‘L’ first. This is likewise not (usually) intended to convey importance and is more likely the result of regional usage.",
        "Unfortunately, this project currently lacks the resources and support to define every letter in the LGBTQ+ acronym."
      ]
    },
    {
      "header": "Different Things to Different People",
      "body": [
        "There is no single definition of what each letter in the full acronym means, though LGBT are consistently Lesbian, Gay, Bisexual, and Transgender. For example, ‘Q’ may mean both Queer (most commonly) or Questioning. ‘A’ may be either Asexual, Aromantic, Agender, or even Ally. (Though it should be noted that the inclusion of Ally can be somewhat contentious.) You may also see variations of the abbreviated acronym such as LGBTQIA(+), in which letters explicitly are intended to not have a singular meaning as repeated letters are collapsed together to represent as many sexualities or identities as possible while still being accessible to write. For some, the ‘Q’, meaning Queer, also performs this functionality as a catch all for the remainder of the acronym, though this can be problematic given that someone may identify as, say, Asexual or Intersex while not identifying as Queer, and it certainly is not applicable to Ally when it is included."
      ]
    }
  ]
};

let lesson02:TextLesson = {
  "title": "Defining Sexualities",
  "citations": [
    {
      "apaString": "Sam Killermann. (n.d.). Comprehensive* List of LGBTQ Vocabulary Definitions. Retrieved from https://www.itspronouncedmetrosexual.com/2013/01/a-comprehensive-list-of-lgbtq-term-definitions/",
      "link": "https://www.itspronouncedmetrosexual.com/2013/01/a-comprehensive-list-of-lgbtq-term-definitions/"
    }
  ],
  "type": LessonType.Text,
  "sections": [
    {
      "header": "Overview",
      "body": [
        "This lesson will cover the basic definitions of what different sexualities mean in a general sense. Note that these definitions are very high level, and sexuality is never quite as simple as we will discuss here. For the sake of ease, we will not consider potential sex or gender distinctions unless a term is explicitly associated with one or the other. The terms as they apply to transgender and nonbinary people are discussed in following lessons."
      ]
    },
    {
      "header": "Heterosexual",
      "body": [
        "Also referred to as “straight”, heterosexual means opposite sex/gender attracted. "
      ]
    },
    {
      "header": "Homosexual",
      "body": [
        "Homosexual is the general term meaning same sex/gender attracted."
      ]
    },
    {
      "header": "Gay",
      "body": [
        "Gay is a term that has two major usages, both specifically referring to homosexual men and more broadly to almost any member of the LGBTQ+ community. While there is some contention about the broader usage outside of strictly homosexual attraction (explicitly homosexual men and women), it will not be considered in this course material given the focus."
      ]
    },
    {
      "header": "Lesbian",
      "body": [
        "Lesbian refers to same sex/gender attracted women."
      ]
    },
    {
      "header": "Bisexual",
      "body": [
        "Bisexual refers to attraction to multiple sexes/genders. The prefix “bi-“ has become something of a misnomer, or at the least it has been redefined to mean <em>two or more</em>."
      ]
    },
    {
      "header": "Pansexual",
      "body": [
        "Pansexual is a word without a single strict definition but can most easily be considered as attraction to someone regardless of gender."
      ]
    },
    {
      "header": "Pansexuality and Bisexuality",
      "body": [
        "Pansexuality is a relatively newer term, heavily associated with bisexuality. While they are functionally equivalent for the most part in practice, they do have nuances between them that matter to many people. To build upon the simple definition of pansexual provided here, it could be said that pansexuality is an explicit statement of sex/gender not being a consideration at all in attraction, while for bisexuality it <em><strong>may</strong></em> be still part of the consideration in attraction. This is an imperfect statement however, and many people who identify using the bisexual label do not make distinction based on sex/gender in their attraction. It ultimately comes down to which label an individual is more comfortable with."
      ]
    },
    {
      "header": "Asexual",
      "body": [
        "Asexuality is having little to no sexual attraction. This is an oft misunderstood term, and it does not inherently mean an individual has no sexual attraction at all. It also does not preclude romantic attraction, which will be discussed shortly.",
        "You may also see it abbreviated to the term “Ace”, though this is not used universally.",
        "Asexuality is also considered to potentially encompass a number of other sexualities which provide greater nuance. Demisexuality is one such sexuality, which refers to someone who can only feel sexual attraction with someone they are emotionally connected with."
      ]
    }
  ]
};

let lesson03: TextLesson = {
  "title": "How the ‘T’ Fits In",
  "type": LessonType.Text,
  "sections": [
    {
      "header": "The T in LGBTQ+: Cultural Ties",
      "body": [
        "Unlike most of the letters in the LGBTQ+ acronym, being transgender/nonbinary isn’t a statement on sexuality, and you may wonder why it is included among the other letters in the acronym. This is a very important topic that could not possibly be done justice in the space we have available here, but it largely comes down to that divergence from the norm on both sexuality and gender has been met with the same forms of oppression, plus that prior to modern understandings of gender identity the line was far more blurred in any case. The acronym was born as representative of the Pride movement, which in turn is largely credited to the 1969 Stonewall riots during which transgender people played a major role. Simply put, the LGBTQ+ community shares common culture and a common battle against oppression. Homophobic and transphobic rhetoric are overwhelmingly repetitive, and legal oppression aimed at non-hetero sexualities does not often make exceptions based on gender identity.",
        "The line becomes even blurrier still when you consider that even many straight transgender people many transgender people are actively a part of LGB communities. For instance, a straight transgender woman (male attracted) may have, prior to coming out as transgender, publicly identified as a gay man for their life until that point. It is exceedingly rare for a transgender person to transition in such a way they only find themselves a part of hetero-oriented communities, both prior to and post transition."
      ]
    },
    {
      "header": "Where’s the ‘N’ for Nonbinary?",
      "body": [
        "Despite the fact that not everyone who is nonbinary identifies as transgender, the association is strong enough that the T is considered to be comprehensive of nonbinary people as well. This may reflect the somewhat dated usage of transgender as an umbrella term for which nonbinary was considered to be entirely a subcategory of rather than a potential distinct identity."
      ]
    }
  ]
};

let lesson04: TextLesson = {
  "title": "The Nuance of Labeling Sexuality",
  "type": LessonType.Text,
  "sections": [
    {
      "header": "____romantic",
      "body": [
        "In addition to the labels for sexuality, you may also see the use of terms such as homoromantic, biromantic, aromantic, and so forth. These terms are not to be confused with sexuality, and hinge on the distinction between sexual attraction and romantic attraction. For most, sexual attraction and romantic attraction go hand in hand, and the sexuality labels are often used as inclusive of both forms of attraction, or at the least making the distinction is not important to an individual. However, for some there may not be an alignment between sexual and romantic attraction and the distinction is important to them. A common use case is for people who are asexual, but still feel romantic attraction, resulting in labels such as, for example, asexual and panromantic, indicating that someone has little to no sexual attraction but may be romantically attracted to anyone regardless of sex/gender."
      ]
    },
    {
      "header": "Combining Labels",
      "body": [
        "Even beyond establishing lines between the sexual and romantic, it is becoming increasingly common for people to identify with multiple labels. Some terms such as demisexual lend to this without any issue, as it simply provides and extra condition to attraction. Other combinations have garnered pushback, with the most prominent such combination being bisexual or pansexual lesbian. As this course is not intended to debate these issues, and simply provide context for interaction with patients, the merits of the arguments for and against the use of this or other contended combinations will not be considered. All that matters for your purposes is that you respect your patients’ choices of terms to describe themselves."
      ]
    },
    {
      "header": "Compound Orientations and Transgender/Nonbinary Identities",
      "body": [
        "While there are no known studies about who is most likely to identify with compound sexual orientations, it is most often culturally associated with people of Transgender/Nonbinary identities and younger Millennial and Generation Z cisgender LGB+ persons. It is rare, though far from unheard of, to see a cisgender LGB+ person use a compound identity. The same also tends to hold true for any of the sexualities outside of Lesbian, Gay, and Bisexual in general."
      ]
    }
  ]
};

let lesson05: TextLesson = {
  "title": "Sexuality and being Transgender and/or Nonbinary",
  "citations": [
    {
      "apaString": "Wonky Wednesday: Trans people & sexual orientation. (2013, June 5). Retrieved from https://www.thetaskforce.org/wonky-wednesday-trans-people-sexual-orientation/",
      "link": "https://www.thetaskforce.org/wonky-wednesday-trans-people-sexual-orientation/"
    },
    {
      "apaString": "Davis, S. A., & Meier, S. C. (2014). Effects of Testosterone Treatment and Chest Reconstruction Surgery on Mental Health and Sexuality in Female-To-Male Transgender People. International Journal of Sexual Health, 26(2), 113–128. doi: 10.1080/19317611.2013.833152"
    }
  ],
  "type": LessonType.Text,
  "sections": [
    {
      "header": "Sexual Orientation and Binary Transgender Identities",
      "body": [
        "This is a simple concept, but one that needs explicit discussion nonetheless due to the common misunderstandings about who transgender people are. Simply put, a transgender person can be any sexuality that a cisgender person can, and they are applied in the exact same manner. Just as a straight cisgender woman is attracted to men, a straight transgender woman is attracted to men.",
        "To summarize, here is a table representing single sex attracted orientations. More than single sex attracted orientations are not included, as they apply in a consistent manner regardless."
      ],
      'imageAsset': {
        'fileName': 'genderandsexualorientationchart.png',
        position: Position.below,
        altText: 'Sexual Orientation in Relation to Gender',
        caption: 'Sexual Orientation in Relation to Gender'
      }
    },
    {
      "header": "Sexual Orientation and Nonbinary Identities",
      "body": [
        "The sexual orientations of nonbinary people and the labels they employ are no different than for nonbinary people. How people apply these terms is usually a matter of personal comfort based on their distinct identity. For example, a feminine presenting nonbinary person attracted to women or femininity regardless of gender (such as other nonbinary people) may use the term lesbian. Despite the stricter definition of lesbian as a same-sex/gender attracted woman it may still be the term that a nonbinary person feels best represents their orientation. Others may explicitly avoid what they view as gendered phrasing entirely or opt for terms that have no direct connection to one’s gender such as bisexual or pansexual while providing additional nuance in another form if required.",
        "At times, the chosen labels for a nonbinary person’s identity may be communal, and this is not entirely restricted to nonbinary people either but also many binary transgender people. For instance, to return to the example of a nonbinary lesbian, perhaps the person was assigned female at birth and identified as a lesbian woman prior to coming out as nonbinary. Their time spent as part of the lesbian community may influence their choice of terminology."
      ]
    },
    {
      "header": "The Numbers",
      "body": [
        "Despite a particular stereotype which will be addressed in the following lesson, most transgender people have a non-heterosexual orientation. The National LGBTQ Task Force reports the following numbers in a 2013 report, and the general distribution has remained consistent in more recent studies. 25% of respondents to their survey identified as Bisexual, 23% Queer, 23% Gay/Lesbian/Same-gender attracted, 4% Asexual, 2% other, and another 23% Heterosexual."
      ]
    }
  ]
};

let lesson06: TextLesson = {
  "title": "Discrimination and Sexuality",
  "citations": [
    {
      "apaString": "Wonky Wednesday: Trans people & sexual orientation. (2013, June 5). Retrieved from https://www.thetaskforce.org/wonky-wednesday-trans-people-sexual-orientation/",
      "link": "https://www.thetaskforce.org/wonky-wednesday-trans-people-sexual-orientation/"
    }
  ],
  "type": LessonType.Text,
  "sections": [
    {
      "header": "Harmful Stereotypes",
      "body": [
        "There is a common stereotype regarding the sexuality of transgender people that should be addressed, which can perhaps be considered one of the most the harmful and unfair stereotypes about transgender people. The claim from some, including within the LGBTQ+ community, is that transgender people are just gay people transitioning in order to be considered straight and blend into hetero-normative society. In essence, it turns the very idea of transitioning into an act of homophobia. There is absolutely no truth to this stereotype, as the statistics provided have shown, most transgender people do not identify as straight/heterosexual to begin with!"
      ]
    },
    {
      "header": "Labeling Sexuality based on Genitals and “Genital Preference”",
      "body": [
        "This can be a stumbling block for many people, as one of the most basic views of sexuality hinges on genital configurations. That is to say, someone with a penis interacting with someone else with a penis is considered a gay act, while someone with a vagina interacting with someone else with a vagina is considered a lesbian act. This view of sexuality is unequivocally transphobic.",
        "A transgender person’s genitals are part of their body as a woman, man, or nonbinary person. A transgender woman’s penis is a woman’s penis. A transgender man’s vagina is a man’s vagina. A nonbinary person’s genitals are neither male nor female, both, or whatever is applicable to their identity.",
        "Many people reading this may chafe at this assertion, but it is actually rooted in nature. Broadly speaking, genitals in any configuration are equivalent structures, and many species have diverging genital structures from humans in any case. Associating a specific genital configuration with a specific sex or gender is an aspect of cis-normativity. Ascribing an explicitly male or female sex determination to a transgender person’s genitals is denial of their identity as man, woman, or nonbinary. To put this into context, would you consider a cisgender woman who receives a double mastectomy to then have a “man’s chest”?",
        "Now, to be exceedingly clear, this is absolutely not a judgment on any individual basing part of their attraction on genitals, nor stating that any such attraction is inherently transphobic. This can be accounted for with the phase “genital preference”. Here we enter another extremely contentious debate even within the transgender and nonbinary community, which we will not delve into in full detail as part of this course but will strive to provide a high-level overview regarding.",
        "Genital preference can to a degree be considered the same as any other preference, in that it may be rooted in bigotry or it may not. If a straight cis man were to refuse to date a transgender woman because they believe it to be gay to interact with someone with a penis, that is certainly transphobic. If in the same scenario the cis man simply isn’t attracted to penises and in impacts their attraction to someone they legitimately see as a woman, then that is not typically considered transphobic, though some might assert there is still transphobia at play in informing learned preference through cis-hetero-normative cultural standards."
      ]
    }
  ]
};

let lesson07: TextLesson = {
  "title": "Inclusiveness",
  "citations": [
    {
      "apaString": "Dalara, A. (2014, March 25). Celebrate Bisexuality! GLAAD Dispels Common Myths and Stereotypes. Retrieved from https://www.glaad.org/blog/celebrate-bisexuality-glaad-dispels-common-myths-and-stereotypes",
      "link": "https://www.glaad.org/blog/celebrate-bisexuality-glaad-dispels-common-myths-and-stereotypes"
    },
    {
      "apaString": "Joyner, J. (2016, September 23). Is the Term 'Bisexual' Transphobic? A Fact Check. Retrieved from https://www.pride.com/bisexual/2016/9/23/term-bisexual-transphobic-fact-check",
      "link": "https://www.pride.com/bisexual/2016/9/23/term-bisexual-transphobic-fact-check"
    }
  ],
  "type": LessonType.Text,
  "sections": [
    {
      "header": "Single Sex/Gender Sexualities",
      "body": [
        "When it comes to attraction towards nonbinary people, things may seem confusing though it actually couldn’t be simple because good old self-identification!",
        "If a straight person is attracted to a nonbinary person, regardless of that nonbinary person’s presentation or specifics of their identity, they are still straight. The person may not even feel the need to question their sexuality. Unlike with the issues that may arise from self-applied sexuality labels regarding attraction to binary transgender people, this is perfectly acceptable without further consideration.",
        "This does not make nonbinary identities any less valid given that attraction towards a nonbinary person does not typically define someone else’s sexuality, but rather it reveals flaws in how we consider the ends versus the middle of the sexuality spectrum to begin with. Strict labels inherently beg exceptions."
      ]
    },
    {
      "header": "Erroneous Views of Bisexuality vs Pansexuality and Nonbinary Identities",
      "body": [
        "Over the past years, aligned with the growing influence of the usage of the term pansexual, there has been an unfair representation of bisexuality as being non-inclusive of nonbinary genders. That is to say, many contended that being bisexual as opposed to pansexual was inherently transphobic due to the prefix ‘bi-‘ meaning two, and thus supposedly restricting the term to the male/female gender binary. This was an entirely unjust accusation against bisexual people, misrepresenting the applied meanings of both terms. In reality the overwhelmingly majority of people who identify as bisexual and there has historically been a special kinship between the ‘B’ and ‘T’ parts of the LGBTQ+ community."
      ]
    }
  ]
};

let lesson08 = {
  title: "Sexuality Quiz",
  type: LessonType.Quiz,
  questions: [
    {
      questionType: QuestionType.TrueFalse,
      questionText: "The majority of Transgender people identify as Heterosexual.",
      correctAnswer: false,
      feedback: ['According to the National LGBTQ Task Force, 77% of Transgender people identify as non-heterosexual orientations.']
    },
    {
      questionType: QuestionType.TrueFalse,
      questionText: "Someone may be Homosexual and Heteroromantic.",
      correctAnswer: true,
      feedback: ['While this combination is not particularly common, at least not as a self-applied identity, this is still entirely possible even if it may seem counterintuitive. Even though in the overwhelming majority of people romantic and sexual attraction are in sync, types of attraction are not inherently limited by one another.']
    },
    {
      questionType: QuestionType.MultipleChoice,
      questionText: "The ‘A’ in the extended LGBTQIA+ acronym may stand for what?",
      possibleAnswers: [
        "Asexual",
        "Agender",
        "Ally",
        "All of the Above"
      ],
      correctAnswer: 4,
      feedback: [
        "The letters in the acronym mean different things to different people or may encompass multiple concepts to the same person. While the inclusion of Ally can be contentious, it is nonetheless a meaning for the ‘A’ held by a significant number of people."
      ]
    },
    {
      questionType: QuestionType.TrueFalse,
      questionText: "A straight person cannot be attracted to a nonbinary person and still be considered straight.",
      correctAnswer: false,
      feedback: ['Sexual attraction towards nonbinary people is not a disqualifying factor in one’s sexual orientation in any direction.']
    }
  ]
};

let lesson09: TextLesson = {
  "title": "Slurs and Offensive Terminology Usage",
  "citations": [
    {
      "apaString": "Perlman, M. (2019, January 22). How the word 'queer' was adopted by the LGBTQ community. Retrieved from https://www.cjr.org/language_corner/queer.php",
      "link": "https://www.cjr.org/language_corner/queer.php"
    }
  ],
  "type": LessonType.Text,
  "sections": [
    {
      "header": "Overview",
      "body": [
        "The following terms are either considered outright slurs or are inappropriate to use if you are not a part of the LGBTQ community, or likewise have some other consideration that needs to be addressed. Note that even the worst slurs are sometimes used within marginalized communities by individuals in some contexts as people may attempt to “reclaim” slurs to disarm them as vehicles as hate. This was overwhelmingly successful in the case of the term queer itself, which has taken on a very broad and positive meaning to the LGBTQ+ community. Note that the words provided here are regarding the LGBTQ+ community in general, and not transgender/nonbinary people explicitly."
      ]
    },
    {
      "header": "Tranny",
      "body": [
        "This is the most common slur used against transgender people. It is extremely offensive and considered dehumanizing."
      ]
    },
    {
      "header": "She-Male, Dickgirl, and Ladyboy",
      "body": [
        "These terms are very offensive to transgender women in the United States. (There is some cultural significance for “ladyboy” in Thailand, which will not be discussed here.) There are heavy associations with all three terms and marginalizing fetishist driven pornography. (In this context, “fetishist” refers explicitly to a group of individuals, mostly straight men, who see transgender women as nothing but sexual objects for their enjoyment, often referred to as “(trans) chasers”.) While there is likely few cases you will encounter these words, they are still words of which to be aware."
      ]
    },
    {
      "header": "Fag/Faggot",
      "body": [
        "This is perhaps one of the most offensive slurs for some members of the LGBTQ community, most commonly by volume directed at male attracted men (ex: gay or bisexual men). It is often used against transgender women or nonbinary people who were assigned male at birth, usually hinging on bigoted perspectives of such transgender/nonbinary as men. It is often applied even regardless of sexual orientation and can carry an additional element of misogyny as well as the innate homophobia. For example, lesbian transgender women are often still slurred with the term based solely on femininity."
      ]
    },
    {
      "header": "Gay",
      "body": [
        "Even the term gay itself may be used as a pejorative, as it is used in context of describing something perceived as negative, typically something that the speaker believes to be disgusting/distasteful in some way. By applying the word in such a descriptive manner, it implies that being gay is, in turn, negative or disgusting."
      ]
    },
    {
      "header": "Dyke",
      "body": [
        "While commonly self-applied among the lesbian community, this word is also used as a slur by some directed towards lesbian women, and even gender nonconforming straight women. It should never be used casually if you aren’t explicitly sure the person identifies with the term and that they accept external use of it in reference to them."
      ]
    }
  ]
};

let lesson10: TextLesson = {
  "title": "Sexuality and Patient Care",
  "type": LessonType.Text,
  "sections": [
    {
      "header": "Do you really need to know?",
      "body": [
        "Speaking with your patients about their sexuality should be handled delicately and only as a matter of actual necessity. Again, transgender and nonbinary people aren’t here to sate anyone’s curiosity about their bodies <em>or</em> their sex lives. If you don’t need to know, don’t ask, it’s as simple as that. Those who do need to know are typically restricted to providers who are in a position to have responsibilities in areas of care such as HIV prevention."
      ]
    },
    {
      "header": "Timing Matters!",
      "body": [
        "Sadly, it is all too common for a closeted person to come out as transgender to their healthcare providers and then immediately be barraged by follow-up questions, often including about sexuality.",
        "You should always keep one thing in mind above all else when a patient comes out to you: <strong>You’re probably one of the first people they’ve told.</strong> Particularly if you are a primary care provider, who are often an extremely early reveal in the process of coming out in order to attempt to secure transitional care. ",
        "Being transgender is scary in general and coming out in particular is positively <em>terrifying</em>. Take your time and show compassion. It doesn’t matter what your schedule looks like or if you were just doing a quick med check and need to move on, if you can’t take this moment to show compassion and understanding then you are in the wrong profession. There is a fairly good chance your patient is still trying to figure a lot of things out, including their sexuality, and immediately launching into discussion about the topic, particularly as it leads directly into discussion of HIV risk is the last thing your patient needs to deal with at that moment.",
        ""
      ]
    },
    {
      "header": "Discussing HIV Risk or other areas of care",
      "body": [
        "If you do need to know to ensure proper care, broach the topic gently and do not make assumptions. Consider something equivalent to the following sample dialogue, which is engaging with a transgender woman in regards to HIV prevention:",
        "<div class=\"block-quote-body\"><p>“Now, I have a question that is important for me to ask, as it may inform treatment. You are free to decline to answer. Know that this question is in no way making assumptions about your sexuality based on your gender identity. Unfortunately, there is a high occurrence of HIV among transgender women who engage in sex with men and other transgender women, and as such I need to know if this is a concern for you as an individual.”</p></div>"
      ]
    }
  ]
};

let lesson11: TextLesson = {
  "title": "Unit 5 Conclusion",
  "type": LessonType.Text,
  "sections": [
    {
      "header": "Moving to Unit 6",
      "body": [
        "Unit 6 turns to clinical care and discusses the topic of transitional medicine in more detail that Unit 2."
      ]
    }
  ]
};

export const unit05: Unit = {
  title: "Gender Identity and Sexuality",
  order: 5,
  lessons: [lesson01, lesson02, lesson03, lesson04, lesson05, lesson06, lesson07, lesson08, lesson09, lesson10, lesson11
    ]
};
