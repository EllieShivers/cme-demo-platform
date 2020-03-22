import {Unit} from '../../app/models/unit';
import {Section, TextLesson} from '../../app/models/text-lesson';
import {Citation} from '../../app/models/lesson';
import {VideoLesson} from '../../app/models/video-lesson';

let lesson0201: TextLesson = new TextLesson(
  'Unit Introduction',
  [
    new Section(
      'Welcome to Unit 2 - Transgender 101',
      [
        'Welcome to Unit 2, Transgender 101. This unit will build upon the basic information presented in Unit 1 to provide a more complete picture of what it means to be transgender, gender dysphoria, transitioning, and more.'
      ]
    ),
    new Section(
      'Revisting Terminology',
      [
        'In unit 1, we defined three key terms we will build upon for the first section of this unit: transgender, nonbinary, and cisgender, which you can see here for reference.',
        '<div class="vocab-wrapper"><span class="vocab-term">Transgender</span><br><span class="vocab-def">Adjective describing someone whose gender identity does not align with their sex assigned at birth.</span></div>',
        '<div class="vocab-wrapper"><span class="vocab-term">Nonbinary</span><br><span class="vocab-def">Adjective describing someone whose gender identity is outside of the male-female binary. This is not a “third gender”.</span></div>',
        '<div class="vocab-wrapper"><span class="vocab-term">Cisgender</span><br><span class="vocab-def">Adjective describing someone whose gender identity  aligns with their sex assigned at birth.</span></div>',
        'In the next lessons, we will look at the first expansion of common terminology with the term "Transsexual", and jump right into serious topics that relate to understanding what it means to be transgender.'
      ]
    )
  ]
);

let lesson0202: TextLesson = new TextLesson(
  'Transgender vs. Transsexual Part 1',
  [
    new Section(
      'Transsexual',
      [
        'When dealing with education for healthcare providers, the term <strong>transsexual</strong> is one that deserves particular care as it is very common both in older research literature and even diagnostic manuals. In practice transsexual is often given a very similar meaning to the term transgender, at least as it applies to binary individuals, but it has fallen out of favor for a few reasons, and when used in modern context can have very explicitly negative connotations for many patients. We will attempt to provide a somewhat neutral and conditional definition of the term here.',
        '<div class="vocab-wrapper"><span class="vocab-term">Transsexual</span><br><span class="vocab-def">Adjective describing someone whose gender identity does not align with their sex assigned at birth, usually denoting medical transitioning between binary sexes. Dated and potentially offensive. </span></div>',
        'The following lessons will attempt to tackle this tricky area in transgender healthcare, including discussing the debate about the nature of sex versus gender, as per the terms transsexual and transgender.'
      ]
    )
  ]
);

let lesson0203: TextLesson = new TextLesson(
  'Sex vs. Gender',
  [
    new Section(
      'A Warning',
      [
        'That this is an active and at times extremely contentious debate is something of which everyone should be aware in order to avoid unintentional offense. Even among researchers and philosophers within the transgender and nonbinary community, there is not a consensus. This lesson is provided here solely due to the nature of working in healthcare requiring advanced context. You should rarely, if ever, engage your patients on this topic.'
      ]
    ),
    new Section(
      'What are the definitions of Sex and Gender in this context?',
      [
        'A common assertion is that sex refers to primary and secondary sex characteristics, while gender is a social construct relating to language or cultural roles, though people often presume a stronger historical basis for the use of the terms in this manner than actually exists. In David Haig’s “The Inexorable Rise of Gender and the Decline of Sex: Social Change in Academic Titles, 1945–2001”, he asserts that much of this hinges on the use of the term gender in the context of gender roles by John Money through the last half of the 20th century, and its subsequent adoption by feminism. Prior to that, this was not the typical usage.',
        'Another approach to this topic is that sex and gender are both social constructs, and that terminology has only evolved to avoid sex-based essentialism, such as reducing people to reproductive roles. Essentially, sex as we know it is not an immutable aspect of nature, but rather a flawed attempt at linguistic sorting based on an incomplete human understanding of a potentially infinitely complex.'
      ]
    ),
    new Section(
      'Considering the line between the Sexes',
      [
        'Consider for a moment how you might differentiate sex. That is, what is the essence of what it means to be male or female?',
        'One commonly suggested point of division is chromosomes, of course that is to say whether someone is XX or XY. Yet, then how do we define people with atypical chromosomes? Are they a third sex, or fourth sex, or fifth sex, and so forth? This is not something that many people would argue. Someone may then say that these are simply mutations or disorders, and that a person with atypical chromosomes are still male or female. That may very well be, but that very assertion itself disqualifies chromosomes as an absolutely determinant of sex.',
        'In the majority of cases, sex is recorded somewhat arbitrarily by observation of visible primary sex characteristics at birth. Yet, intersex people make up, by some estimates, 1.7% of births, many cases which cannot be identified until puberty or even later in life, and then many times who prove to meet far more criteria for the opposite sex than that they were observed as being at birth. In other words, it is a fairly regular occurrence that what we observe at birth is not always accurate. And of course, most of these observable characteristics are the very ones many transgender people actively seek to change.',
        'If chromosomes and observable characteristics are not absolute definers of sex, then what? Fertility and non-observable sex organs also fall prey to large number of exceptions. (We will ignore the circular definition of “sex characteristics” for the sake of brevity.) Many people find themselves without fully formed or functioning internal sex organs, independent of any intersex conditions.',
        'There is not a single absolute delineation that applies to every person, and many times criteria that is presumed to be immutable is actually not--even including DNA, which some transplants and even pregnancy have both been documented to modify.'
      ]
    ),
    new Section(
      'Summary',
      [
        'Now, the point of this lesson is not to convince anyone that sex and gender are the same thing, but rather to illustrate why this is a debate in the first place. Are transgender people changing their gender or their sex? Is sex immutable, or can both be changed? If not immutable, what does it mean to change one’s sex? Or, is the distinction of sex and gender a meaningless one to begin with?',
        'It should also be noted that this was not always a debate, at least not in the manner it is today. For example, the term transsexual clearly indicated that it was the view for years that people transitioning were changing their sex, not just gender. This is likewise shown by other historical terms such as Sex Reassignment Surgery. The shift to the phrase transgender was not eschewing this, but rather it was an attempt to shift from what was deemed as demeaning terminology for several reasons, partially due to avoiding sex essentialism as per later feminist dialogue—that is, reducing people to their reproductive organs as how they are defined in society.'
      ]
    )
  ],
  [
    {
      apaString: 'Haig, D. (2004). The Inexorable Rise of Gender and the Decline of Sex: Social Change in Academic Titles, 1945–2001. Archives of Sexual Behavior, 33(2), 87–96. doi: 10.1023/b:aseb.0000014323.56281.0d',
      link: 'https://web.archive.org/web/20110525090802/http://www.oeb.harvard.edu/faculty/haig/Publications_files/04InexorableRise.pdf'
    }
  ]
);

let lesson0204: TextLesson = new TextLesson(
  'Transgender vs. Transsexual Part 2',
  [
    new Section(
      'Placing the term Transsexual in context',
      [
        'To return to the issue of the definition of transsexual vs transgender, the term transsexual has likewise fallen out of favor for most, as it is viewed as both essentialist and exclusionary, particularly towards nonbinary identities. Unfortunately, transsexual has also been co-opted by hostile political interests and is commonly used as a smokescreen, as people claim they support “authentic transsexuals”. Some trans people will self-apply the label for a similar reason, as indicative of their supposed authenticity opposed to those they view as part of a social trend. In the spirit of this course, it must be stated that these beliefs should never be allowed to inform patient care, including patient interaction in any form, and it is thus also recommended that the phrase transsexual should be explicitly avoided even if it is not technically invalid.'
      ]
    ),
    new Section(
      'Medicalizing Transgender Identities',
      ['This is further undercut by perhaps an even larger issue, which undercuts all of this discussion in that the term transsexual is seen as “medicalizing” transgender identities. It is well known that historically, non-heterosexual orientations have been treated as a mental health disorder to be cured, and the same holds true for being transgender. The use of the term transsexual can be viewed as an extension of that history. Medical practitioners were traditionally placed in a role to gatekeep who was or who was not transgender, hinging someone’s very identity on a clinical diagnosis—a diagnosis that was often very conditional based on the practitioner’s views and held stereotypes, with views often entirely informed by bigotry and misogyny. By moving away from the term transsexual, the transgender community has sought to reclaim identities as their own. That is to say, being able to define themselves as individuals, as well as the path they must take in their transition.']
    ),
    new Section(
      'Other Sex-essentialist Phrasing',
      [
        'Beyond providing context to the term transsexual, the debate on sex and gender needed to be acknowledged so that people outside of the community can understand the nature of how it is used to make judgments about transgender and nonbinary people, sometimes even being used as a means to argue against civil rights and or basic legal recognitions that cisgender people take for granted. For instance, people hostile to transgender rights will often use sex essentialist phrasing, be it attempting to draw distinct lines between male and female as sexes thus excluding transgender people, or by adding qualifiers such as the terms “biological” or “natal”, that inherently separate binary transgender people from those assigned that sex at birth and erasing nonbinary people entirely. It is important to recognize that for the sake of your patients it is best to thus avoid sex essentialist phrasing or any sort of qualifying terminology, such as biological or natal.'
      ]
    )
  ]
);

let lesson0205: TextLesson = new TextLesson(
  'Variants of the word Transgender',
  [
    new Section(
      'Words Matter',
      [
        'While it may seem tedious or petty, due to the way in which many words or phrases are used, and by whom they are used, it cannot be emphasized enough that your word choice is extremely important. This even extends to the word transgender itself, as there are several variations which can be highly offensive and are only typically used in hostile, bigoted context.'
      ]
    ),
    new Section(
      'Transgender is not a Noun',
      [
        'When speaking with transgender people or in regards to transgender issues, the word “transgender” should only ever be used as stated in the definitions previously provided as an adjective. The use of “transgender” as a noun, such as in “a transgender” or “those transgenders”, is considered highly offensive. Transgender is a descriptive term, not the whole of a person.',
        'This also applies to other variations such as “Transgenderism”. For those who follow transgender healthcare, this may surprise you given that until 2020, the World Professional Association of Transgender Health’s (WPATH) official journal was called the Journal of Transgenderism. This is a prime example of clinical terminology lagging behind social terminology in ways potentially damage to the relationship between the transgender and nonbinary community and healthcare providers and medical researchers.'
      ]
    ),
    new Section(
      '\"Transgendered\"',
      [
        'This also applies to other variations such as “Transgenderism”. For those who follow transgender healthcare, this may surprise you given that until 2020, the World Professional Association of Transgender Health’s (WPATH) official journal was called the Journal of Transgenderism. This is a prime example of clinical terminology lagging behind social terminology in ways potentially damage to the relationship between the transgender and nonbinary community and healthcare providers and medical researchers.'
      ]
    ),
    new Section(
      'Even Spaces Matter!',
      [
        'When describing a transgender person in writing, you should also avoid using the abbreviated form “trans” without a space between the word “trans” and “person”, “woman”, or “man”. This spelling is associated with transphobic rhetoric that is intended to demean transgender people as other to and less than cis people. A space between words may seem like a minor issue, but for a transgender person who encounters bigotry on a regular basis it is a very stark warning sign of potential hate, or at the very least ignorance of important topics to the transgender community. This style of phrasing is typically seen in use by a group often labeled as “TERFs”, or Transgender Exclusionary Radical Feminists. This group, and what is very inaccurate labeling of the group, is a topic will be discussed in more detail in Unit 4.'
      ]
    )
  ]
);

let lesson0206: TextLesson = new TextLesson(
  'Other Pitfalls',
  [
    new Section(
      'But wait, there\'s more...',
      [
        'In addition to the terms and phrases from the previous lessons, there are a few other common pitfalls of which you should be aware when interacting with your transgender and/or nonbinary patients, though this is by no means an exhaustive list.'
      ]
    ),
    new Section(
      'Transgender People are not Crossdressers or Drag Performers',
      [
        'One of the most common misunderstandings transgender people encounter is that they are equivalent to crossdressers or drag performers. Most crossdressers and drag performers are actually cisgender. Unfortunately, in conversation many cisgender people will think they are being supportive by bringing up their support for drag in particular, though in reality the transgender person they are speaking is likely hurt by the statement, as they feel their identity is undermined as false or theatrical by this comparison.',
        'Though it should be noted some transgender people are crossdressers or drag performers <em>in addition</em> to be transgender.'
      ]
    ),
    new Section(
      'Do not assume Sexuality or HIV Risk',
      [
        'Do not make assumptions about your patient’s sexuality. Ever. Gender identity does not have a causal relationship with sexuality. Most commonly this is in the form of presuming that a transgender person is heterosexual relative to their gender identity. It is often born of stereotypes which ultimately reduce transgender men to butch (masculine) lesbians and transgender women to feminine gay men. The reality is far more complex.',
        'This also includes making assumptions about what medications your patient may require, such as PREP.',
        'Remember, a physician is often an early step in a transgender person’s coming out process. There is a fairly good chance you will have patients for whom you are one of the first people to which they have revealed they are transgender. This can be a terrifying thing, and immediately jumping into discussions on sexuality and HIV can be unnerving and damage trust. Further recommendations on this topic will be discussed in future units.'
      ]
    ),
    new Section(
      'Unjustified Inquiries about Transition History or Future Plans',
      [
        'Lastly, you should never ask a transgender person about their history of transition or intentions for the future unless you are in a position where you explicitly require the knowledge to provide care. Before you ask a question of a transgender person, you should ask yourself one first: Do you legitimately need to know this information or are you using your position of authority to satisfy your curiosity? To put a fine point on this, a podiatrist does not need to know the details of a patient’s genitals.'
      ]
    )
  ]
);

let lesson0207: VideoLesson = new VideoLesson(
  'What does it mean to be Transgender?',
  '<!--suppress HtmlDeprecatedAttribute --><iframe width="560" height="315" src="https://www.youtube.com/embed/t7xHamn5inQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n',
  [
    'So, this all leads into the question, what exactly does it mean to be transgender? Let’s break this down further into a few additional questions…',
    'How does someone decide if they are transgender? Are there requirements to being transgender? To be transgender, do you have to transition in some way? What might someone do to transition if they are transgender?',
    'The following lessons will shift the discussion towards answering these questions and others, hopefully providing a greater understanding of what it actually means to be transgender beyond just a definition.',
    'Now, at this point you may be wondering why this unit didn’t lead with this part of the discussion and chose to discuss contentious or negative topics first. Unfortunately, that was all also part of being transgender. Externally, transgender/nonbinary identities are debated publicly, civil rights are threatened legally, and transgender/nonbinary people are slurred and met with open bigotry almost every day of their lives. Internally, they often face these sorts of debates as well, as they struggle to find themselves while feeling as though they are drowning in a cis-normative society that doesn’t understand. Every transgender and/or nonbinary person is a philosopher to some degree, who has been forced to consider the topic of what it means to be male or female, or neither, whether they want to or not. What was summarized here in a dozen paragraphs may even be part of an internal dialogue lasting decades, and that is just the tip of the iceberg.',
    'The hope is that by providing these topics first, you will go into the following portion of the unit with the understanding that nothing about any of this, about <em>who we are</em> is simple or ill-considered at any level.',
    'For someone to decide whether or not they are transgender it is both extremely simple and extremely complicated at the same time. The simple aspect is that it just comes down to someone recognizing that their internal sense of their gender does not match what they are were assigned at birth. In other words, if you view yourself as transgender, you are transgender.',
    'Of course, in practice, recognition can be a very difficult path. If you were to consider your own gender, can you describe what it feels like? Or rather, for a cisgender person, what does it feel like to be a man or a woman? There is no easy answer, if a universal answer is possible at all, and this also applies to transgender people. How does a transgender woman recognize they are internally a woman? What does the feeling of being a woman even mean? While there are countless individual narratives, this often does not come down to an innate sense of what one is, though it certainly can, but rather recognizing that there is something incongruent about one’s current existence in some manner in regards to gender.',
    'For some this is discomfort with their physical body. Others may find themselves disturbed by external perceptions in social interactions. When caused by gender incongruency, this is what we mean by Gender Dysphoria, which will be discussed in the following lesson.'
  ]
);

let lesson0208: TextLesson = new TextLesson(
  'Gender Dysphoria',
  [
    new Section(
      'What is Gender Dysphoria?',
      [
        'The APA describes gender dysphoria thusly:',
        '<div class="block-quote-body"><p>Gender dysphoria involves a conflict between a person\'s physical or assigned gender and the gender with which he/she/they identify. People with gender dysphoria may be very uncomfortable with the gender they were assigned, sometimes described as being uncomfortable with their body (particularly developments during puberty) or being uncomfortable with the expected roles of their assigned gender.</p><p>People with gender dysphoria may often experience significant distress and/or problems functioning associated with this conflict between the way they feel and think of themselves […] and their physical or assigned gender.</p></div>',
        'It is, unfortunately, difficult to convey what gender dysphoria feels like without experiencing it first-hand, though there are many common narratives within the transgender and nonbinary community. Some may presume it is similar to body dysmorphia, but this is not truly the case, though there may also be some body dysmorphia related issues at play which complicate gender dysphoria.',
        'Many transgender people will spend most of their lives without recognizing gender dysphoria for what it truly is, and this can reveal itself in numerous ways. Sometimes, it is as simple as strongly associating with fictional characters not of the gender they were assigned at birth, or using video and roleplaying games as outlets, creating and inhabiting characters more aligned with their gender identity. Often, the nature of what the person is engaging in may not even be recognized for what it truly is until later.',
        'Transition often relieves gender dysphoria, and this relief is one of the ways in which transgender people find themselves with vastly improved mental health from transitioning. This is not absolute however, and those who encounter difficulties or are otherwise unable to cope in a healthy manner with the stress of transition, particularly those who have unrealistic expectations, may see their dysphoria worsen. To be extremely clear, this is not an argument against transition, but rather an argument for tempering expectations and addressing any other underlying concerns to ensure that an individual can approach their transition in a strong state of mental health from which they can benefit fully. Though this sentiment should expressly not be taken as a reason to preclude transitional care, simply to augment it.',
        'It must also be explicitly stated that <em>Gender Dysphoria is not a requirement for being transgender</em>. There are many people who do not suffer from negative feelings about their gender assigned at birth who are still very much transgender or nonbinary.'
      ]
    ),
    new Section(
      'Gender Euphoria',
      [
        'Gender Euphoria is one such example of how this is the case, though not the only one. Gender Euphoria is, as the name suggests, the opposite of Gender Dysphoria. Even if one does not face negative effects from living in the gender they were assigned at birth, they may still have positive effects from transitioning and living as a different gender. This can be considered the other side of the coin of Gender Dysphoria, and they may even compliment one another, resulting in an even greater degree of improved wellbeing.'
      ]
    ),
    new Section(
      'Dysphoria or Euphoria Are Not Required',
      [
        'While recognizing Dysphoria and Euphoria are common causes of someone acknowledging they are transgender, it must be stated explicitly again that these are not requirements for being transgender. <em>There is no requirement other than self-identifying as transgender.</em> That is to say, if someone feels they are transgender, that is enough.'
      ]
    )
  ],
  [
    new Citation(
      'American Psychiatric Association. (n.d.). What Is Gender Dysphoria? Retrieved from https://www.psychiatry.org/patients-families/gender-dysphoria/what-is-gender-dysphoria',
      'https://www.psychiatry.org/patients-families/gender-dysphoria/what-is-gender-dysphoria'
    )
  ]
);

let lesson0209: TextLesson = new TextLesson(
  'Transitioning',
  [
    new Section(
      'What is Transitioning?',
      [
        'When someone acknowledges they are transgender, there are many paths they may choose to take. This is where “Transitioning” may come into play. Transition can be thought of as the period during which someone makes the changes, whatever form those changes may take, in moving from their role in or perception as their gender assigned at birth to their identified gender. This is an imperfect definition however, and in reality, there are rarely clear-cut lines to be drawn moving from some point A to some point B. For many, they may even consider transition a perpetual state. For some, transition may even mean little more than open acknowledgement of being transgender.',
        'In other words, what transition entails is highly variable and supremely personal.'
      ]
    ),
    new Section(
      'Types of Transition',
      [
        'As healthcare providers, you are most likely to encounter two general categories of transition. Social Transition and Medical Transition. Social transition is, as the name implies, focused on changing society’s or one own’s perception of oneself to match one’s gender identity. Changing pronouns, names, style of dress, and so forth are all examples of social transition. Medical transition is that which involves some form of medical intervention, such as hormone therapy or surgeries.',
        '<div class="in-line-image-wrapper"><img class="in-line-image" src="assets/images/transitiontypes.png"></div>'
      ]
    ),
    new Section(
      'Transition is Not Required',
      [
        'Just as with dysphoria and euphoria, there are no requirements to being transgender in terms of what an individual does or does not do to transition. A transgender person who socially transitions but foregoes any medical transition is equally as valid as someone who seeks both forms of transition. Likewise, someone who seeks medical transition without social transition, or those who seek no explicit social or medical transition, are also equally valid.',
        'To put a fine point on it with one of the more visible areas of debate due to sensationalist media, a transgender woman who foregoes having surgery and decides to retain their penis is every bit the same as a transgender woman who opts to have a vaginoplasty. They are both equally transgender, and, perhaps more importantly to state, equally women—both are then likewise every bit as much of a woman as a cisgender woman.'
      ]
    ),
    new Section(
      'Pronouns, Names, and Passing',
      [
        'There are three specific areas of social transition that deserve extra attention in this primer, which will be covered in the following lessons.'
      ]
    )
  ]
);

let lesson0210: TextLesson = new TextLesson(
  'Social Transition: Pronouns',
  [
    new Section(
      'Pronouns',
      [
        'The first is switching pronoun usage. Most transgender people will modify their personal pronoun usage, particularly binary transgender people. This is often an integral part of social transition and should be respected at all times. More than that, gendering a patient correctly with pronoun usage is perhaps one of the most important things someone can do for a transgender person, particularly if they are just beginning transition. '
      ]
    ),
    new Section(
      'Misgendering',
      [
        '“Misgendering” is the use of pronouns not matching one’s gender identity. For example, a transgender man who uses he/him (masculine) pronouns being called “she” or “her” or having feminine phrasing such as “miss”, or “ma’am” used to refer to them. This can be very psychologically damaging for a transgender person. ',
        'While the concept of misgendering may technically apply to cisgender people as well, it is not associated with the same marginalization and denial of identity as with transgender and nonbinary people, and it is generally considered in poor taste to use the term misgender in regards to cisgender people. Most people have likely encountered accidentally being called the wrong pronouns on rare occasion. In contrast, in the context of transgender people, misgendering is repetitive and many times even a deliberate attack. Though there is a notable exception to this guideline for cisgender people being deliberately misgendered due to attacks rooted in transphobia, something which many gender nonconforming cis women may encounter. In such a case, the term misgender is entirely appropriate to use.'
      ]
    )
  ]
);

let lesson0211: TextLesson = new TextLesson(
  'Social Transition: Names',
  [
    new Section(
      'Preferred Names and Legal Name Change',
      [
        'Many transgender people opt to change their name to better reflect their gender identity. Prior to legal name change, this will typically be seen with “preferred names”. For administrative reasons, legal names must be recorded, but patients should always be provided the opportunity to provide a preferred name that makes them feel affirmed and respected.'
      ]
    ),
    new Section(
      'Deadnaming',
      [
        'Failure to use a preferred name is called “deadnaming”. Similar to misgendering, deadnaming is the use of either someone’s legal name at the expense of a preferred name or the use of an old legal name despite the individual having legally changed their name. As with misgendering, failure to use preferred names or new legal names can be very damaging during your patient interactions.',
        'Unfortunately, sometimes this is not even an issue of human failure. Even with legal changes, it is very common for computer systems to fail to propagate new names properly to all aspects of an organization. Transgender people will even receive mail in their dead name for years after changing it legally. Please be conscious of this, being aware that just because your health record says one thing that it may not be entirely accurate, and you should always confirm with your patients that their name is recorded properly in your system.'
      ]
    )
  ]
);

let lesson0212: TextLesson = new TextLesson(
  'Social Transition: Passing',
  [
    new Section(
      'What is Passing?',
      [
        'One of the most contentious philosophical areas of transition is what is called “passing”. “Passing” is being perceived as one’s gender identity, without being seen as transgender. While this course will not go into the full debate around this term, suffice to say that it is often held that a drive to being able to “pass” as cisgender is ultimately harmful to the individual and community, as it reinforces cis-normative societal standards and can serve to isolate individuals. While not identical, this can be thought of as similar to the more commonly known debate around women feeling forced to meet certain externally imposed standards of femininity, such as with western beauty or behavioral standards.',
        '“Passing” may be more complicated however, in that the external validation or conformance to cis-normative standards can be a byproduct of a valid, internally oriented perception of oneself. This can be seen with many who wish to be perceived as their gender identity completely for their own sake, but do not wish to throw away perception of being transgender by doing so. Regardless of whether one passes, visibility may be maintained for the sake of the community.'
      ]
    ),
    new Section(
      'Passing and Safety',
      [
        'For transgender people, safety is often a major concern as well. Non-passing transgender people face more abuse in society, and even absent any desire for internal or external relief for dysphoria or purposeful conformation to cis-normativity, a transgender person may seek to pass to avoid harm while going about their lives. This plays directly into a related concept, “stealth”.'
      ]
    ),
    new Section(
      'Stealth',
      [
        'Being stealth refers to someone who actively hides they are transgender, that is to say, they are not “out”. The concept has strong connections with the history of violence against transgender people and feeling the need to blend completely into the majority cis society to avoid harm. Someone may be stealth in some situations, but not in others.'
      ]
    ),
    new Section(
      'Individuality! Or, You Know the Drill by Now.',
      [
        'As with everything else, and regardless of the philosophical debates about conformity, this topic is highly personal in nature and you should never make assumptions.',
        'This also plays into how you communicate with transgender patients. A common cliché is that cisgender individuals will make comments about how “they never would have guessed” or backhanded statements such as “you look like a real man/woman”. Unless you are explicitly engaged in a facet of treatment involving external perception, such as with mental health providers exploring the topic at the behest of a patient or a surgeon seeking to identify patient goals for a procedure, you should avoid this area of discussion entirely—though even in those cases, care should be taken. What may seem like a harmless compliment, may in fact be far more than that for your patient.'
      ]
    ),
    new Section(
      'You Can’t Always Tell',
      [
        'This also leads into another related area that needs to be discussed. Remember at all times, if you are not aware of someone’s transgender status, professionally or personally, you absolutely cannot always identify when someone is transgender. And in cases where you believe you can, you are likely often incorrect. You should never try to guess whether or not someone is transgender. Guessing who is or who is not transgender is not a game.'
      ]
    )
  ]
);

let lesson0213: TextLesson = new TextLesson(
  'Medical Transition: HRT',
  [
    new Section(
      'Lesson Note',
      [
        'For now, we will provide only a very high-level look at medical transition, primarily explaining terminology. The clinical aspects of this will be delved into in more depth in Unit 6 of this course.'
      ]
    ),
    new Section(
      'Hormone Replacement Therapy',
      [
        'The most basic form of medical transition is Hormone Replacement Therapy, or HRT. This involves suppressing one or more hormones in favor of one or more hormones, or in some cases seeking a balance somewhere in the middle. Of course, HRT is not remotely a transgender only treatment.',
        'Masculinizing HRT involves providing testosterone.',
        'Feminizing HRT involves providing estrogen and suppressing testosterone. There is a bit more variation in feminizing HRT than masculinizing HRT, and in the United States, this is commonly done utilizing oral estradiol and spironolactone, sometimes supplemented by progesterone.',
        'There are many minor variations on the approaches to HRT which will be discussed in Unit 6.'
      ]
    ),
    new Section(
      'Effects of HRT',
      [] //TODO: Add HRT Effects after writing Unit 6
    )
  ]
);


let lesson0214: TextLesson = new TextLesson(
  'Medical Transition: Surgery',
  [
    new Section(
      'Overview',
      [
        'There are many surgeries that transgender people can undergo and many synonyms used in the transgender community for these surgeries, with two of the most common euphemisms seen being “Top Surgery” and “Bottom Surgery” which are not gender specific terms.'
      ]
    ),
    new Section(
      'Top Surgery',
      [
        '“Top Surgery” includes both breast augmentation for transgender women or trans feminine people, as well as mastectomies for transgender men or trans masculine people.'
      ]
    ),
    new Section(
      'Bottom Surgery',
      [
        '“Bottom Surgery” refers to phalloplasty and vaginoplasty alike. The classic catch-all term for bottom surgery was Sex Reassignment Surgery, or SRS. This has largely been replaced by the term Gender Confirmation Surgery, or GCS. Both the terms SRS and GCS have detractors due to the implications of the phrasing, though they are still accepted in clinical usage.',
        'Feminizing bottom surgery may also involve an orchiectomy, either prior to or entirely in place of, vaginoplasty, depending on patient needs and goals. Most commonly, it is used as an interim measure to remove the requirement for anti-androgens in Hormone Replacement Therapy. There may also be additional procedures performed as follow ups, such as labiaplasties.'
      ]
    ),
    new Section(
      'Facial Surgery',
      [
        'In addition to the Top and Bottom surgery groupings, Facial Feminization or Masculinization Surgery, or FFS or FMS, are also considered fairly standard, though far less common than Top and Bottom surgeries. Due to the relative impact of estrogen versus testosterone, Facial Feminization Surgery is the more common of the two forms of facial reconstruction.'
      ]
    ),

    new Section(
      'Other',
      [
        'Body sculpting and other cosmetic surgery techniques beyond facial surgeries may also be undergone. Hair transplants, including hair line revisions, are very common, and they may also be performed as part of Facial Feminization or Masculinization Surgery.',
        'Vocal Fold Surgery is a procedure which increases or decreases the pitch of an individual’s voice, though there are limits to what it can do.'
      ]
    )
  ]
);

let lesson0215: TextLesson = new TextLesson(
  'Medical Transition: Other Procedures',
  [
    new Section(
      'Hair Removal',
      [
        'While not strictly clinical, many transgender women or trans feminine people will engage in hair removal, through electrolysis or laser hair removal. Feminizing HRT has minimal impact on facial hair, and thus beards necessitate additional steps to be taken if a transgender people wishes to remove them. Transgender men may utilize medications such as Minoxidil to spur beard growth.'
      ]
    ),
    new Section(
      'Voice Therapy',
      [
        'Transgender women and trans feminine people often also engage in voice therapy rather than undergo vocal fold surgery, or to augment vocal fold surgery. Transgender men or transmasculine people may also undergo voice therapy if they are unhappy with the results from HRT or otherwise not undergoing HRT, but it is not as common due to the voice changing effects of Testosterone. While not technically medical, it is included here due to the fact that it supplements vocal fold surgery and often involves a trained voice therapist.'
      ]
    )
  ]
);


export const unit02: Unit = {
  title: 'Transgender 101',
  order: 2,
  lessons: [lesson0201, lesson0202, lesson0203, lesson0204, lesson0205, lesson0206, lesson0207, lesson0208, lesson0209, lesson0210, lesson0211, lesson0212, lesson0213, lesson0214, lesson0215]
};
