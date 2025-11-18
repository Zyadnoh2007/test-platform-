window.microbiologyData = {
  morphology: {
    title: "Bacterial Morphology",
    questions: [
      { 
        q: "Which of the following lacks a cell wall?", 
        type: "mcq", 
        options: ["Mycoplasma", "Mycobacteria", "Staphylococci", "Spirochetes"], 
        a: 0, 
        hint: "هذه البكتيريا هي استثناء فريد وتسبب الالتهاب الرئوي اللانمطي.",
        explanation: "الميكوبلازما (Mycoplasma) هي البكتيريا الوحيدة الطبية التي لا تمتلك جداراً خلوياً (Cell Wall)، مما يجعلها مقاومة طبيعياً للمضادات الحيوية التي تستهدف الجدار مثل البنسلين."
      },
      { 
        q: "Which of the following contains N-acetylmuramic acid?", 
        type: "mcq", 
        options: ["Fungi", "Protozoa", "Bacteria", "Mycoplasma"], 
        a: 2, 
        hint: "هذا المركب هو مكون أساسي لجدار الخلية البكتيرية (الببتيدوجلايكان).",
        explanation: "حمض N-acetylmuramic هو جزيء فريد يوجد فقط في الببتيدوجلايكان المكون لجدار الخلية البكتيرية، ولا يوجد في الفطريات أو الأوليات."
      },
      { 
        q: "Which of the following contains dipicolinic acid?", 
        type: "mcq", 
        options: ["Spores", "Vegetative cells", "Capsule", "Flagella"], 
        a: 0, 
        hint: "هذا المركب مسؤول عن مقاومة الأبواغ للحرارة.",
        explanation: "حمض الديبيكولينيك (Dipicolinic acid) مع الكالسيوم يوجد بتركيزات عالية في الأبواغ البكتيرية (Spores) وهو المسؤول الرئيسي عن مقاومتها الشديدة للحرارة والجفاف."
      },
      { 
        q: "The cell wall of gram-positive bacteria consists of:", 
        type: "mcq", 
        options: ["Lipid A", "Thin peptidoglycan layer", "Thick peptidoglycan layer", "Outer membrane"], 
        a: 2, 
        hint: "هذه الطبقة السميكة هي التي تحتفظ بصبغة الكريستال البنفسجية.",
        explanation: "تتميز البكتيريا موجبة الجرام بطبقة سميكة جداً من الببتيدوجلايكان، وهي التي تحبس صبغة الجرام وتجعلها تظهر باللون البنفسجي."
      },
      { 
        q: "The function of the outer membrane in gram-negative bacteria is:", 
        type: "mcq", 
        options: ["Protection from antibiotics", "Passage of nutrients", "Protection from bile salts", "All of the above"], 
        a: 3, 
        hint: "الغشاء الخارجي يوفر حاجزاً وقائياً بعدة طرق.",
        explanation: "الغشاء الخارجي في البكتيريا سالبة الجرام يعمل كحاجز وقائي ضد المضادات الحيوية وأملاح الصفراء، ويحتوي أيضاً على قنوات (Porins) لمرور المغذيات."
      },
      { 
        q: "Which of the following is responsible for endotoxic activity?", 
        type: "mcq", 
        options: ["Lipid A", "O-antigen", "Core polysaccharide", "Peptidoglycan"], 
        a: 0, 
        hint: "هذا هو الجزء الدهني السام من الـ LPS (السكريات الدهنية المتعددة) في البكتيريا سالبة الجرام.",
        explanation: "الجزء المسمى Lipid A من مركب الليبوبولي سكاريد (LPS) في الجدار الخلوي للبكتيريا سالبة الجرام هو المسؤول عن التأثير السام (Endotoxin) الذي يسبب الحمى والصدمة."
      },
      { 
        q: "Which of the following is true about gram-positive bacteria?", 
        type: "mcq", 
        options: ["Stain red by Gram stain", "Contain teichoic acid", "Have an outer membrane", "Contain porin proteins"], 
        a: 1, 
        hint: "هذا الحمض مرتبط بجدار الخلية ويمنحها شحنة سالبة.",
        explanation: "حمض التيكويك (Teichoic acid) هو مكون مميز لجدار البكتيريا موجبة الجرام، ويعمل كمستقبل للالتصاق ويعطي الجدار شحنة سالبة."
      },
      { 
        q: "Which of the following is true about gram-negative bacteria?", 
        type: "mcq", 
        options: ["Stain purple by Gram stain", "Lack an outer membrane", "Contain endotoxin", "Have a thick peptidoglycan layer"], 
        a: 2, 
        hint: "الـ Endotoxin (السم الداخلي) هو جزء لا يتجزأ من الغشاء الخارجي لها.",
        explanation: "البكتيريا سالبة الجرام تحتوي على Endotoxin (LPS) في غشائها الخارجي، وتصبغ باللون الأحمر، وتمتلك طبقة رقيقة من الببتيدوجلايكان."
      },
      { 
        q: "Which of the following structures is essential for bacterial viability?", 
        type: "mcq", 
        options: ["Cell wall", "Capsule", "Flagella", "Pili"], 
        a: 0, 
        hint: "بدون هذا التركيب، تنفجر الخلية البكتيرية بسبب الضغط الأسموزي (باستثناء الميكوبلازما).",
        explanation: "جدار الخلية (Cell wall) ضروري جداً لحياة البكتيريا لأنه يحميها من الانفجار الناتج عن الضغط الأسموزي الداخلي العالي."
      },
      { 
        q: "Which of the following is a function of the cell membrane?", 
        type: "mcq", 
        options: ["Selective permeability", "Electron transport", "Energy production", "All of the above"], 
        a: 3, 
        hint: "الغشاء الخلوي هو موقع للعديد من العمليات الحيوية، يشبه وظائف الميتوكوندريا في حقيقيات النوى.",
        explanation: "الغشاء الخلوي في البكتيريا يقوم بوظائف متعددة: النفاذية الاختيارية، إنتاج الطاقة (ATP) عبر سلسلة نقل الإلكترون، وإفراز الإنزيمات."
      },
      { 
        q: "Which of the following is a function of pili?", 
        type: "mcq", 
        options: ["Motility", "Attachment", "Phagocytosis", "Energy production"], 
        a: 1, 
        hint: "تُعرف أيضاً باسم 'Fimbriae'، وهي تساعد البكتيريا على الالتصاق بالأسطح.",
        explanation: "الأهداب (Pili أو Fimbriae) وظيفتها الأساسية هي مساعدة البكتيريا على الالتصاق بالأسطح وخلايا العائل، وهو شرط أساسي لحدوث العدوى."
      },
      { 
        q: "Which of the following is true about capsules?", 
        type: "mcq", 
        options: ["Polysaccharide in nature (mostly)", "Protect against phagocytosis", "Used in serological identification", "All of the above"], 
        a: 3, 
        hint: "الكبسولة هي عامل ضراوة (virulence factor) مهم.",
        explanation: "الكبسولة تتكون غالباً من السكريات، وظيفتها الرئيسية حماية البكتيريا من البلعمة (Phagocytosis) بواسطة خلايا المناعة، وتستخدم لتحديد نوع البكتيريا (Quellung reaction)."
      },
      { 
        q: "Which of the following is true about flagella?", 
        type: "mcq", 
        options: ["Organ of motility", "Composed of flagellin protein", "Used for identification (H-antigen)", "All of the above"], 
        a: 3, 
        hint: "الأسواط لها وظائف متعددة تتجاوز مجرد الحركة.",
        explanation: "الأسواط (Flagella) هي عضو الحركة، تتكون من بروتين الفلاجيلين، وتعتبر مولد ضد (H-antigen) يستخدم للتعرف على أنواع البكتيريا."
      },
      { 
        q: "Bacteria that are comma-shaped are called:", 
        type: "mcq", 
        options: ["Cocci", "Bacilli", "Vibrios", "Spirilla"], 
        a: 2, 
        hint: "مثال عليها البكتيريا المسببة للكوليرا.",
        explanation: "البكتيريا التي تأخذ شكل 'الواو' أو الضمة تسمى Vibrios، وأشهر مثال عليها هو Vibrio cholerae."
      },
      { 
        q: "Bacteria that form grape-like clusters are called:", 
        type: "mcq", 
        options: ["Streptococci", "Staphylococci", "Diplococci", "Tetrads"], 
        a: 1, 
        hint: "كلمة 'Staphylo' في اليونانية تعني 'عنقود'.",
        explanation: "المكورات العنقودية (Staphylococci) تترتب في مجموعات تشبه عنقود العنب، بينما السبحية (Strepto) تترتب في سلاسل."
      },
      { 
        q: "The counterstain used in Gram staining is:", 
        type: "mcq", 
        options: ["Crystal violet", "Iodine", "Alcohol", "Safranin"], 
        a: 3, 
        hint: "هذه هي الصبغة الحمراء التي تصبغ البكتيريا سالبة الجرام.",
        explanation: "السافرنين (Safranin) هو الصبغة المباينة (Counterstain) ذات اللون الأحمر التي تصبغ الخلايا سالبة الجرام بعد إزالة اللون البنفسجي منها."
      },
      { 
        q: "Acid-fast bacteria stain red with:", 
        type: "mcq", 
        options: ["Gram stain", "Ziehl-Neelsen stain", "Giemsa stain", "India ink"], 
        a: 1, 
        hint: "تستخدم هذه الصبغة لتحديد بكتيريا السل (TB) بسبب جدارها الشمعي.",
        explanation: "صبغة زيل-نيلسن (Ziehl-Neelsen) تستخدم خصيصاً للبكتيريا المقاومة للأحماض (Acid-fast) مثل بكتيريا السل، حيث تصبغها باللون الأحمر."
      },
      { 
        q: "Which structure is used for attachment to surfaces?", 
        type: "mcq", 
        options: ["Flagella", "Capsule", "Pili (Fimbriae)", "Spores"], 
        a: 2, 
        hint: "هذه التراكيب تشبه الشعر وهي أقصر من الأسواط.",
        explanation: "الـ Pili (أو Fimbriae) هي زوائد شعرية قصيرة وظيفتها الأساسية الالتصاق (Adhesion) بأنسجة المضيف."
      },
      { 
        q: "Plasmids are:", 
        type: "mcq", 
        options: ["Essential for bacterial survival", "Extrachromosomal DNA", "Part of the bacterial chromosome", "Composed of RNA"], 
        a: 1, 
        hint: "هي قطع دائرية صغيرة من الحمض النووي تحمل جينات إضافية (مثل مقاومة المضادات الحيوية).",
        explanation: "البلازميدات هي قطع DNA دائرية صغيرة خارج الكروموسوم، ليست ضرورية للحياة ولكنها تمنح ميزات إضافية مثل مقاومة المضادات الحيوية."
      }
    ]
  },
  physiology: {
    title: "Bacterial Physiology",
    questions: [
      { 
        q: "Bacteria that grow best at 37°C are called:", 
        type: "mcq", 
        options: ["Psychrophiles", "Mesophiles", "Thermophiles", "Hyperthermophiles"], 
        a: 1, 
        hint: "هذه هي درجة حرارة جسم الإنسان، وهي مثالية لمعظم البكتيريا المسببة للأمراض.",
        explanation: "Mesophiles (البكتيريا المحبة للحرارة المتوسطة) تنمو بشكل مثالي بين 20-40 درجة مئوية، وتشمل معظم البكتيريا الممرضة للإنسان."
      },
      { 
        q: "Bacteria that require oxygen for growth are called:", 
        type: "mcq", 
        options: ["Obligate anaerobes", "Facultative anaerobes", "Obligate aerobes", "Aerotolerant anaerobes"], 
        a: 2, 
        hint: "كلمة 'Obligate' تعني 'إجباري' أو 'ملزم'.",
        explanation: "Obligate aerobes هي بكتيريا تحتاج الأكسجين بشكل إجباري لإنتاج الطاقة ولا يمكنها النمو بدونه."
      },
      { 
        q: "Bacteria that can grow with or without oxygen are called:", 
        type: "mcq", 
        options: ["Obligate anaerobes", "Facultative anaerobes", "Obligate aerobes", "Microaerophiles"], 
        a: 1, 
        hint: "كلمة 'Facultative' تعني 'اختياري' أو 'مرن'.",
        explanation: "Facultative anaerobes (اللاهوائية الاختيارية) هي الأكثر مرونة، حيث تستخدم الأكسجين إذا وجد (لأنه يعطي طاقة أكثر)، ولكن يمكنها العيش بدونه عن طريق التخمر."
      },
      { 
        q: "The phase of bacterial growth curve with maximum growth rate is:", 
        type: "mcq", 
        options: ["Lag phase", "Log phase", "Stationary phase", "Decline phase"], 
        a: 1, 
        hint: "تُعرف أيضاً بالمرحلة الأسية (Exponential Phase).",
        explanation: "في مرحلة Log phase (المرحلة اللوغاريتمية أو الأسية)، تنقسم البكتيريا بأقصى سرعة ممكنة وتتضاعف أعدادها بانتظام."
      },
      { 
        q: "The phase where bacterial growth equals death rate is:", 
        type: "mcq", 
        options: ["Lag phase", "Log phase", "Stationary phase", "Decline phase"], 
        a: 2, 
        hint: "في هذه المرحلة، تبدأ الموارد الغذائية في النضوب وتتراكم الفضلات السامة.",
        explanation: "في مرحلة Stationary phase، يتوقف النمو الصافي لأن معدل انقسام الخلايا يساوي معدل موتها بسبب نقص الغذاء وتراكم السموم."
      },
      { 
        q: "Which of these enzymes protects against toxic oxygen products?", 
        type: "mcq", 
        options: ["Catalase", "Superoxide dismutase", "Peroxidase", "All of the above"], 
        a: 3, 
        hint: "البكتيريا الهوائية تحتاج إلى آليات دفاعية ضد نواتج الأكسجين التفاعلية.",
        explanation: "هذه الإنزيمات (Catalase, SOD, Peroxidase) ضرورية لتحييد جذور الأكسجين السامة (مثل الماء الأكسجين)، وهي موجودة في البكتيريا التي تعيش في وجود الهواء."
      },
      { 
        q: "Most pathogenic bacteria are:", 
        type: "mcq", 
        options: ["Psychrophiles", "Mesophiles", "Thermophiles", "Halophiles"], 
        a: 1, 
        hint: "إنها تنمو بشكل أفضل في درجة حرارة الجسم المضيف (حوالي 37 درجة مئوية).",
        explanation: "معظم البكتيريا الممرضة هي Mesophiles لأن درجة حرارة جسم الإنسان (37 درجة) تقع في نطاق نموها المثالي."
      },
      { 
        q: "Bacteria that grow best in high salt concentrations are:", 
        type: "mcq", 
        options: ["Acidophiles", "Alkaliphiles", "Halophiles", "Barophiles"], 
        a: 2, 
        hint: "كلمة 'Halo' تشير إلى الملح (مثل الهالوجينات).",
        explanation: "Halophiles (المحبة للملوحة) هي بكتيريا تتطلب تركيزات عالية من الملح للنمو، مثل بعض أنواع الـ Vibrio."
      },
      { 
        q: "The process of converting N2 to NH3 is called:", 
        type: "mcq", 
        options: ["Nitrification", "Denitrification", "Nitrogen fixation", "Ammonification"], 
        a: 2, 
        hint: "هذه العملية 'تثبت' النيتروجين الجوي في شكل يمكن استخدامه.",
        explanation: "تثبيت النيتروجين (Nitrogen fixation) هو تحويل غاز النيتروجين الجوي الخامل (N2) إلى أمونيا (NH3) التي يمكن للكائنات الحية استخدامها."
      },
      { 
        q: "Which process yields the most ATP?", 
        type: "mcq", 
        options: ["Aerobic respiration", "Anaerobic respiration", "Fermentation", "Glycolysis"], 
        a: 0, 
        hint: "هذه العملية تستخدم الأكسجين كمستقبل نهائي للإلكترونات، وهي الأكثر كفاءة.",
        explanation: "التنفس الهوائي (Aerobic respiration) هو الأكثر كفاءة وينتج أكبر كمية من الطاقة (38 ATP) مقارنة بالتخمر أو التنفس اللاهوائي."
      },
      { 
        q: "Fermentation is characterized by:", 
        type: "mcq", 
        options: ["Using oxygen as final electron acceptor", "Using an inorganic molecule as final electron acceptor", "Using an organic molecule as final electron acceptor", "Generating 38 ATP"], 
        a: 2, 
        hint: "التخمر لا يستخدم سلسلة نقل الإلكترون بنفس طريقة التنفس، وينتج طاقة أقل بكثير.",
        explanation: "التخمر عملية لا هوائية يستخدم فيها مركب عضوي كمستقبل نهائي للإلكترونات، وتنتج كمية قليلة من الطاقة (2 ATP)."
      },
      { 
        q: "The time required for a bacterial population to double is called:", 
        type: "mcq", 
        options: ["Lag time", "Generation time", "Log time", "Stationary time"], 
        a: 1, 
        hint: "يُعرف أيضاً بـ 'زمن التضاعف'.",
        explanation: "زمن الجيل (Generation time) هو الوقت اللازم للخلية لتنقسم وتتضاعف عشيرة البكتيريا في العدد."
      },
      { 
        q: "A 'capnophile' is a bacterium that requires:", 
        type: "mcq", 
        options: ["High salt", "High pressure", "High CO2 levels", "Low oxygen"], 
        a: 2, 
        hint: "كلمة 'Capno' تشير إلى ثاني أكسيد الكربون.",
        explanation: "Capnophiles هي بكتيريا تنمو بشكل أفضل عند وجود تركيزات عالية من ثاني أكسيد الكربون (CO2)."
      },
      { 
        q: "Which of these is a trace element required by bacteria?", 
        type: "mcq", 
        options: ["Carbon", "Nitrogen", "Zinc", "Sulfur"], 
        a: 2, 
        hint: "العناصر النزرة (Trace elements) مطلوبة بكميات ضئيلة جداً، على عكس الكربون أو النيتروجين.",
        explanation: "الزنك (Zinc) يعتبر من العناصر النزرة (Trace elements) المطلوبة بكميات قليلة جداً كعوامل مساعدة للإنزيمات، بينما الكربون والنيتروجين عناصر أساسية."
      },
      { 
        q: "Organisms that use light as an energy source are called:", 
        type: "mcq", 
        options: ["Chemotrophs", "Phototrophs", "Autotrophs", "Heterotrophs"], 
        a: 1, 
        hint: "كلمة 'Photo' تشير إلى الضوء.",
        explanation: "Phototrophs هي الكائنات التي تستخدم الضوء كمصدر للطاقة (مثل النباتات وبعض البكتيريا)."
      },
      { 
        q: "Organisms that use organic compounds as a carbon source are:", 
        type: "mcq", 
        options: ["Autotrophs", "Heterotrophs", "Lithotrophs", "Phototrophs"], 
        a: 1, 
        hint: "كلمة 'Hetero' تعني 'آخر' (أي يتغذى على كائنات أخرى)، بينما 'Auto' تعني 'ذاتي'.",
        explanation: "Heterotrophs (غيرية التغذية) تعتمد على المركبات العضوية (مثل السكريات) كمصدر للكربون، بعكس ذاتية التغذية التي تستخدم CO2."
      },
      { 
        q: "The 'lag phase' is a period of:", 
        type: "mcq", 
        options: ["Rapid cell division", "No metabolic activity", "Adaptation and synthesis", "Cell death"], 
        a: 2, 
        hint: "إنها فترة 'تباطؤ' أو 'تأقلم' قبل بدء النمو السريع.",
        explanation: "في مرحلة Lag phase، لا يوجد انقسام للخلايا، ولكن البكتيريا تكون نشطة جداً استقلابياً لتصنيع الإنزيمات والبروتينات اللازمة للتأقلم مع البيئة الجديدة."
      },
      { 
        q: "Which transport mechanism requires energy (ATP)?", 
        type: "mcq", 
        options: ["Simple diffusion", "Facilitated diffusion", "Active transport", "Osmosis"], 
        a: 2, 
        hint: "النقل 'النشط' يتطلب طاقة لنقل المواد ضد تدرج التركيز.",
        explanation: "النقل النشط (Active Transport) هو الآلية الوحيدة التي تتطلب استهلاك طاقة (ATP) لنقل المواد عكس تدرج التركيز."
      },
      { 
        q: "Facultative anaerobes primarily use... if O2 is present.", 
        type: "mcq", 
        options: ["Fermentation", "Aerobic respiration", "Anaerobic respiration", "Photosynthesis"], 
        a: 1, 
        hint: "هي تختار المسار الأكثر كفاءة (الأكثر إنتاجاً للطاقة) عند توفر الأكسجين.",
        explanation: "في وجود الأكسجين، تفضل البكتيريا اللاهوائية الاختيارية استخدام التنفس الهوائي لأنه ينتج طاقة أكبر بكثير (38 ATP) مقارنة بالتخمر."
      },
      { 
        q: "Most bacteria grow best at a pH of:", 
        type: "mcq", 
        options: ["1-3", "4-5", "6.5-7.5", "9-11"], 
        a: 2, 
        hint: "معظم البكتيريا (خاصة الممرضة) تفضل بيئة متعادلة، تشبه بيئة الجسم.",
        explanation: "معظم البكتيريا (Neutrophiles) تفضل بيئة درجة حموضتها متعادلة تقريباً (6.5-7.5)، وهي البيئة المشابهة لمعظم سوائل الجسم."
      }
    ]
  },
  flora: {
    title: "Normal Flora",
    questions: [
      { 
        q: "Normal flora is most abundant in the:", 
        type: "mcq", 
        options: ["Stomach", "Small intestine", "Colon", "Lungs"], 
        a: 2, 
        hint: "هذا الجزء من الأمعاء الغليظة يحتوي على تريليونات البكتيريا.",
        explanation: "القولون (الأمعاء الغليظة) يحتوي على أكبر كثافة وتنوع من الفلورا الطبيعية في الجسم."
      },
      { 
        q: "Which of the following sites is normally sterile?", 
        type: "mcq", 
        options: ["Skin", "Mouth", "Blood", "Vagina"], 
        a: 2, 
        hint: "وجود بكتيريا في هذا الموقع يعني وجود عدوى (تجرثم الدم).",
        explanation: "الدم والأنسجة الداخلية وسوائل الجسم (مثل السائل الشوكي) يجب أن تكون معقمة تماماً في الحالة الطبيعية."
      },
      { 
        q: "The predominant bacteria in the vagina of adult women are:", 
        type: "mcq", 
        options: ["Staphylococci", "Streptococci", "Lactobacilli", "E. coli"], 
        a: 2, 
        hint: "هذه البكتيريا تنتج حمض اللاكتيك، مما يحافظ على بيئة حمضية واقية.",
        explanation: "بكتيريا العصيات اللبنية (Lactobacilli) هي المهيمنة في المهبل وتفرز حمض اللاكتيك للحفاظ على بيئة حمضية تمنع نمو الميكروبات الضارة."
      },
      { 
        q: "Normal flora of the skin includes:", 
        type: "mcq", 
        options: ["Staphylococcus epidermidis", "Propionibacterium acnes", "Diphtheroids", "All of the above"], 
        a: 3, 
        hint: "الجلد ليس معقماً ويستضيف أنواعاً مختلفة من البكتيريا.",
        explanation: "جلد الإنسان يستضيف أنواعاً متعددة من البكتيريا المسالمة مثل العنقوديات الجلدية (S. epidermidis) والبروبيونية العدية."
      },
      { 
        q: "Which of the following is a benefit of normal flora?", 
        type: "mcq", 
        options: ["Synthesize vitamins (K, B12)", "Prevent colonization by pathogens", "Stimulate the immune system", "All of the above"], 
        a: 3, 
        hint: "الفلورا الطبيعية تقدم العديد من الفوائد للمضيف.",
        explanation: "الفلورا الطبيعية مفيدة جداً: فهي تصنع فيتامينات (K, B)، وتنافس البكتيريا الضارة، وتحفز تطور الجهاز المناعي."
      },
      { 
        q: "The most common bacteria in the mouth (dental plaque) is:", 
        type: "mcq", 
        options: ["Streptococcus mutans", "E. coli", "Staphylococcus aureus", "Lactobacillus"], 
        a: 0, 
        hint: "هذه البكتيريا هي السبب الرئيسي لتسوس الأسنان.",
        explanation: "Streptococcus mutans هي البكتيريا الرئيسية في الفم وتلعب دوراً كبيراً في تكوين طبقة البلاك وتسوس الأسنان."
      },
      { 
        q: "The stomach is relatively sterile due to:", 
        type: "mcq", 
        options: ["High pH", "Low pH (acidity)", "Presence of bile", "Lack of nutrients"], 
        a: 1, 
        hint: "حمض الهيدروكلوريك (HCl) يجعل البيئة شديدة الحموضة.",
        explanation: "المعدة تعتبر بيئة شبه معقمة بسبب الحموضة الشديدة (HCl) التي تقتل معظم الميكروبات المبتلعة."
      },
      { 
        q: "Which organism is a common cause of urinary tract infections (UTI)?", 
        type: "mcq", 
        options: ["Staphylococcus epidermidis", "E. coli", "Streptococcus pyogenes", "Neisseria gonorrhoeae"], 
        a: 1, 
        hint: "هذه البكتيريا هي جزء من الفلورا الطبيعية للأمعاء ولكنها تسبب مشاكل إذا وصلت للمثانة.",
        explanation: "E. coli هي المسبب الأول لعدوى المسالك البولية، حيث تنتقل من مكانها الطبيعي (الأمعاء) إلى مجرى البول."
      },
      { 
        q: "An 'opportunistic pathogen' is an organism that:", 
        type: "mcq", 
        options: ["Always causes disease", "Is part of the normal flora", "Causes disease in a compromised host", "Is transmitted by vectors"], 
        a: 2, 
        hint: "إنها 'تنتهاز' الفرصة عندما يضعف الجهاز المناعي للمضيف.",
        explanation: "الممرض الانتهازي هو ميكروب (غالباً من الفلورا الطبيعية) لا يسبب مرضاً للأصحاء ولكنه يسبب عدوى خطيرة لضعاف المناعة."
      },
      { 
        q: "The term 'microbial antagonism' means:", 
        type: "mcq", 
        options: ["Normal flora helping pathogens", "Normal flora preventing pathogen growth", "Pathogens causing disease", "Microbes growing in harmony"], 
        a: 1, 
        hint: "الفلورا الطبيعية 'تعادي' أو 'تنافس' الميكروبات الممرضة.",
        explanation: "التضاد الميكروبي يعني أن الفلورا الطبيعية تحمي الجسم عن طريق منافسة البكتيريا الضارة على الغذاء والمكان، ومنعها من الاستعمار."
      },
      { 
        q: "Antibiotic therapy can lead to:", 
        type: "mcq", 
        options: ["Overgrowth of normal flora", "Superinfection (e.g., C. difficile)", "Increased immunity", "Sterilization of the gut"], 
        a: 1, 
        hint: "المضادات الحيوية واسعة المجال تقتل الفلورا الطبيعية، مما يسمح للميكروبات المقاومة (مثل C. difficile) بالنمو الزائد.",
        explanation: "الاستخدام المفرط للمضادات الحيوية يقتل الفلورا النافعة، مما يعطي فرصة لبكتيريا خطيرة ومقاومة مثل C. difficile للتكاثر وتسبب عدوى (Superinfection)."
      },
      { 
        q: "Organisms that are acquired temporarily and are not part of the established flora are:", 
        type: "mcq", 
        options: ["Resident flora", "Transient flora", "Opportunistic flora", "Pathogenic flora"], 
        a: 1, 
        hint: "إنها بكتيريا 'عابرة' أو 'مؤقتة' يمكن إزالتها بسهولة (مثل غسل اليدين).",
        explanation: "Transient flora (الفلورا العابرة) هي ميكروبات نلتقطها من البيئة وتبقى لفترة قصيرة ويمكن إزالتها بسهولة، بعكس Resident flora المستوطنة."
      },
      { 
        q: "Which vitamin is synthesized by E. coli in the gut?", 
        type: "mcq", 
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], 
        a: 3, 
        hint: "هذا الفيتامين ضروري لتخثر الدم.",
        explanation: "بكتيريا الأمعاء (مثل E. coli) تلعب دوراً هاماً في تصنيع فيتامين K الضروري لتخثر الدم."
      },
      { 
        q: "The 'germ-free' (gnotobiotic) animal:", 
        type: "mcq", 
        options: ["Is healthier than normal animals", "Has a poorly developed immune system", "Is resistant to pathogens", "Has a normal lifespan"], 
        a: 1, 
        hint: "هذا يثبت أن الفلورا الطبيعية ضرورية لـ 'تدريب' جهاز المناعة.",
        explanation: "الحيوانات الخالية من الجراثيم يكون جهازها المناعي ضعيفاً وغير متطور، مما يثبت أن الفلورا الطبيعية ضرورية لتحفيز وتدريب المناعة."
      },
      { 
        q: "Which of the following is NOT a benefit of normal flora?", 
        type: "mcq", 
        options: ["Bacterial interference", "Vitamin synthesis", "Causing dental caries", "Immune stimulation"], 
        a: 2, 
        hint: "تسوس الأسنان هو مرض، وليس فائدة.",
        explanation: "تسوس الأسنان هو ضرر ناتج عن بكتيريا الفلورا (مثل S. mutans) وليس فائدة."
      },
      { 
        q: "The most predominant anaerobe in the colon is:", 
        type: "mcq", 
        options: ["E. coli", "Bacteroides fragilis", "Clostridium perfringens", "Lactobacillus"], 
        a: 1, 
        hint: "البكتيريا اللاهوائية تفوق الهوائية بكثير في القولون.",
        explanation: "بكتيريا Bacteroides fragilis (وهي لاهوائية) تشكل النسبة العظمى من فلورا القولون، وتفوق أعداد E. coli بكثير."
      },
      { 
        q: "The normal flora of the upper respiratory tract (nose, pharynx) resembles:", 
        type: "mcq", 
        options: ["Skin flora", "Gut flora", "Mouth flora", "Vaginal flora"], 
        a: 2, 
        hint: "هذه المناطق متصلة ببعضها البعض.",
        explanation: "فلورا الجهاز التنفسي العلوي تشبه إلى حد كبير فلورا الفم بسبب الاتصال التشريحي المباشر بينهما."
      },
      { 
        q: "Babies acquire their initial normal flora:", 
        type: "mcq", 
        options: ["In the uterus (sterile)", "During and after birth", "From antibiotics", "They are born with it"], 
        a: 1, 
        hint: "الرحم بيئة معقمة. يبدأ الاستعمار الميكروبي عند الولادة.",
        explanation: "يكتسب الأطفال الفلورا الطبيعية لأول مرة أثناء المرور بقناة الولادة وبعد الولادة مباشرة من الأم والبيئة، فالرحم بيئة معقمة."
      }
    ]
  },
  sterilization: {
    title: "Sterilization & Disinfection",
    questions: [
      { 
        q: "The complete killing or removal of all forms of life, including spores, is:", 
        type: "mcq", 
        options: ["Disinfection", "Sterilization", "Antisepsis", "Sanitization"], 
        a: 1, 
        hint: "التعقيم هو المستوى الأعلى، ويضمن القضاء التام.",
        explanation: "التعقيم (Sterilization) هو العملية المطلقة التي تقضي على جميع أشكال الحياة الميكروبية بما فيها الأبواغ البكتيرية المقاومة."
      },
      { 
        q: "The reduction of microbial load to a safe public health level is:", 
        type: "mcq", 
        options: ["Disinfection", "Sterilization", "Antisepsis", "Sanitization"], 
        a: 3, 
        hint: "هذا المصطلح يستخدم غالباً في خدمات الطعام (مثل غسل الأطباق).",
        explanation: "Sanitization (التعقيم الصحي) يعني تقليل عدد الميكروبات إلى مستوى آمن وفقاً لمعايير الصحة العامة (مثل غسل أدوات الطعام)."
      },
      { 
        q: "Which of the following is the most resistant to sterilization?", 
        type: "mcq", 
        options: ["Vegetative bacteria", "Viruses (enveloped)", "Fungal spores", "Bacterial endospores"], 
        a: 3, 
        hint: "الأبواغ البكتيرية مصممة للبقاء على قيد الحياة في الظروف القاسية.",
        explanation: "الأبواغ البكتيرية (Endospores) هي أكثر أشكال الحياة مقاومة للتعقيم والحرارة والمواد الكيميائية."
      },
      { 
        q: "The standard condition for autoclaving (steam under pressure) is:", 
        type: "mcq", 
        options: ["100°C for 30 min", "121°C for 15 min", "160°C for 2 hours", "72°C for 15 sec"], 
        a: 1, 
        hint: "هذه هي الحرارة والبخار (الضغط) اللازم لقتل الأبواغ.",
        explanation: "الظروف القياسية للأوتوكلاف لضمان التعقيم هي 121 درجة مئوية لمدة 15 دقيقة تحت ضغط 15 psi."
      },
      { 
        q: "Autoclaving kills by:", 
        type: "mcq", 
        options: ["Denaturing proteins", "Oxidation", "Alkylation", "Radiation damage"], 
        a: 0, 
        hint: "البخار تحت الضغط ينقل الحرارة بكفاءة، مما يؤدي إلى 'تخثر' أو 'تدمير' البروتينات.",
        explanation: "الحرارة الرطبة (Autoclave) تقتل الميكروبات عن طريق تمسخ (Denaturation) وتخثر البروتينات والإنزيمات الحيوية."
      },
      { 
        q: "Dry heat sterilization (hot air oven) requires:", 
        type: "mcq", 
        options: ["121°C for 15 min", "100°C for 1 hour", "160°C for 2 hours", "Lower temp than autoclaving"], 
        a: 2, 
        hint: "الحرارة الجافة أقل كفاءة من الحرارة الرطبة، لذا فهي تحتاج درجة حرارة أعلى ووقت أطول.",
        explanation: "الحرارة الجافة أقل كفاءة في الاختراق من الحرارة الرطبة، لذا تتطلب درجات حرارة أعلى (160-170 درجة) ووقت أطول (ساعتين)."
      },
      { 
        q: "Pasteurization is used to:", 
        type: "mcq", 
        options: ["Sterilize milk", "Reduce microbial load in milk", "Kill spores in milk", "Make milk thicker"], 
        a: 1, 
        hint: "البسترة لا تقتل كل شيء (ليست تعقيماً)، لكنها تقتل الميكروبات الممرضة وتقلل التلف.",
        explanation: "البسترة ليست تعقيماً كاملاً، بل تهدف لقتل الميكروبات الممرضة وتقليل عدد الميكروبات المسببة للتلف في الحليب والأطعمة."
      },
      { 
        q: "The (HTST) pasteurization method is:", 
        type: "mcq", 
        options: ["63°C for 30 min", "72°C for 15 sec", "140°C for 3 sec (UHT)", "100°C for 10 min"], 
        a: 1, 
        hint: "HTST = High Temperature Short Time (درجة حرارة عالية لوقت قصير).",
        explanation: "طريقة HTST (الحرارة العالية لفترة قصيرة) تستخدم حرارة 72 درجة مئوية لمدة 15 ثانية، وهي الطريقة الشائعة لبسترة الحليب."
      },
      { 
        q: "Which of the following is a form of ionizing radiation?", 
        type: "mcq", 
        options: ["UV light", "Gamma rays", "Microwaves", "Infrared"], 
        a: 1, 
        hint: "الأشعة المؤينة (Ionizing) أقوى بكثير من الأشعة فوق البنفسجية (غير المؤينة).",
        explanation: "أشعة جاما (Gamma rays) هي إشعاع مؤين قوي جداً وقادر على اختراق المواد وتدمير DNA الميكروبات."
      },
      { 
        q: "Ionizing radiation (Gamma) is used to sterilize:", 
        type: "mcq", 
        options: ["Sutures and plastic syringes", "Surgical instruments (metal)", "Glassware", "Culture media"], 
        a: 0, 
        hint: "تُستخدم للمواد التي لا تتحمل الحرارة، مثل البلاستيك.",
        explanation: "يستخدم الإشعاع المؤين لتعقيم المواد الطبية التي تتلف بالحرارة (Heat-labile) مثل الحقن البلاستيكية والخيوط الجراحية."
      },
      { 
        q: "UV light sterilizes by:", 
        type: "mcq", 
        options: ["Creating hydroxyl radicals", "Causing thymine dimers in DNA", "Denaturing proteins", "Puncturing the cell wall"], 
        a: 1, 
        hint: "الأشعة فوق البنفسجية تدمر الحمض النووي (DNA) مباشرة.",
        explanation: "الأشعة فوق البنفسجية (UV) تقتل البكتيريا عن طريق إتلاف حمضها النووي (DNA) وتكوين روابط شاذة تسمى Thymine dimers."
      },
      { 
        q: "UV light is limited by its:", 
        type: "mcq", 
        options: ["High cost", "Poor penetrating power", "Toxicity", "Flammability"], 
        a: 1, 
        hint: "لا يمكنها اختراق الأسطح، لذا هي مناسبة لتعقيم الأسطح والهواء فقط.",
        explanation: "العيب الرئيسي للأشعة فوق البنفسجية هو ضعف قدرتها على الاختراق، لذا تستخدم فقط لتعقيم الأسطح والهواء."
      },
      { 
        q: "Filtration is used to sterilize:", 
        type: "mcq", 
        options: ["Heat-labile liquids (e.g., serum)", "Glassware", "Metal instruments", "Plastic tubing"], 
        a: 0, 
        hint: "تُستخدم للسوائل الحساسة للحرارة عن طريق 'فلترة' البكتيريا منها.",
        explanation: "الفلترة هي الطريقة الوحيدة لتعقيم السوائل التي تفسد بالحرارة (مثل السيروم ومحاليل الفيتامينات) عن طريق حجز البكتيريا ميكانيكياً."
      },
      { 
        q: "HEPA filters are used to remove microbes from:", 
        type: "mcq", 
        options: ["Liquids", "Air", "Surfaces", "Food"], 
        a: 1, 
        hint: "تستخدم في غرف العمليات وأنظمة السلامة البيولوجية لتنقية الهواء.",
        explanation: "فلاتر HEPA مصممة خصيصاً لتنقية الهواء من الجسيمات والميكروبات وتستخدم في غرف العمليات والعزل."
      },
      { 
        q: "Which of the following is a halogen disinfectant?", 
        type: "mcq", 
        options: ["Alcohol", "Phenol", "Chlorine (Bleach)", "Formaldehyde"], 
        a: 2, 
        hint: "الهالوجينات هي عناصر المجموعة 17 (مثل الكلور واليود).",
        explanation: "الكلور واليود هما من الهالوجينات المشهورة المستخدمة في التطهير والتعقيم."
      },
      { 
        q: "70% alcohol is more effective than 95% alcohol because:", 
        type: "mcq", 
        options: ["It evaporates slower", "Water is needed for protein denaturation", "It penetrates better", "All of the above"], 
        a: 3, 
        hint: "الماء الموجود في تركيز 70% ضروري لعملية تدمير البروتينات ويساعد على الاختراق.",
        explanation: "الكحول بتركيز 70% أفضل لأن الماء يساعد في اختراق الخلية وتسهيل عملية تمسخ البروتين، كما أنه يتبخر ببطء أكثر من 95%."
      },
      { 
        q: "Which chemical is used for 'cold sterilization' of surgical instruments?", 
        type: "mcq", 
        options: ["70% Alcohol", "Iodine", "Glutaraldehyde", "Soap"], 
        a: 2, 
        hint: "هذا المركب قوي بما يكفي لقتل الأبواغ عند استخدامه لفترة كافية.",
        explanation: "Glutaraldehyde (الجلوتارالدهيد) هو معقم كيميائي قوي يمكنه قتل الأبواغ (Sterilant) ويستخدم لتعقيم المناظير والأدوات الحساسة."
      },
      { 
        q: "Ethylene oxide is a:", 
        type: "mcq", 
        options: ["Liquid disinfectant", "Gas used for sterilization", "Halogen", "Phenolic compound"], 
        a: 1, 
        hint: "يُستخدم كغاز لتعقيم المواد الحساسة للحرارة والرطوبة.",
        explanation: "غاز أكسيد الإيثيلين هو غاز معقم يستخدم للأدوات الطبية البلاستيكية والحساسة التي لا يمكن وضعها في الأوتوكلاف."
      },
      { 
        q: "A disinfectant used on living tissue (skin) is called:", 
        type: "mcq", 
        options: ["Sterilant", "Disinfectant", "Antiseptic", "Sanitizer"], 
        a: 2, 
        hint: "كلمة 'Antiseptic' (مطهر) تستخدم للأنسجة الحية، بينما 'Disinfectant' (معقم) للأسطح.",
        explanation: "Antiseptic (مطهر) هو المادة الآمنة للاستخدام على الأنسجة الحية (مثل الجلد)، بينما Disinfectant يستخدم للأسطح غير الحية."
      },
      { 
        q: "Phenol coefficient is used to:", 
        type: "mcq", 
        options: ["Measure the effectiveness of a disinfectant", "Count bacteria", "Test for sterility", "Identify bacteria"], 
        a: 0, 
        hint: "هو مقياس يقارن فعالية مطهر ما بفعالية الفينول.",
        explanation: "معامل الفينول هو طريقة قديمة لمقارنة قوة المطهر بقوة الفينول كمعيار قياسي."
      }
    ]
  },
  chemotherapy: {
    title: "Antimicrobial Chemotherapy",
    questions: [
      { 
        q: "Which of the following inhibits cell wall synthesis?", 
        type: "mcq", 
        options: ["Penicillin", "Tetracycline", "Rifampin", "Sulfonamides"], 
        a: 0, 
        hint: "هذه هي آلية عمل عائلة البيتا لاكتام (Beta-lactams).",
        explanation: "البنسلين ومضادات البيتا-لاكتام تعمل عن طريق تثبيط تصنيع جدار الخلية البكتيرية (Cell wall synthesis)."
      },
      { 
        q: "Penicillin's mechanism of action is inhibition of:", 
        type: "mcq", 
        options: ["Protein synthesis (50S)", "Protein synthesis (30S)", "Transpeptidation (cell wall)", "Nucleic acid synthesis"], 
        a: 2, 
        hint: "يمنع هذا الإنزيم من تكوين الروابط العرضية في جدار الخلية.",
        explanation: "البنسلين يمنع عملية Transpeptidation، وهي الخطوة الأخيرة في بناء شبكة الببتيدوجلايكان في جدار الخلية، مما يؤدي لموت البكتيريا."
      },
      { 
        q: "Which of the following targets the 30S ribosomal subunit?", 
        type: "mcq", 
        options: ["Tetracycline", "Erythromycin", "Chloramphenicol", "Vancomycin"], 
        a: 0, 
        hint: "يعمل عن طريق منع ارتباط t-RNA بالريبوسوم.",
        explanation: "التتراسيكلين (والأمينوجليكوزيدات) يعمل عن طريق الارتباط بوحدة الريبوسوم الصغيرة 30S وتثبيط تصنيع البروتين."
      },
      { 
        q: "Which of the following targets the 50S ribosomal subunit?", 
        type: "mcq", 
        options: ["Gentamicin", "Erythromycin (Macrolides)", "Ciprofloxacin", "Penicillin"], 
        a: 1, 
        hint: "هذه العائلة (الماكروليدات) تمنع الريبوسوم من التحرك على طول mRNA.",
        explanation: "الإريثروميسين (والماكروليدات بشكل عام) يرتبط بوحدة الريبوسوم الكبيرة 50S ويمنع تصنيع البروتين."
      },
      { 
        q: "Vancomycin is effective against:", 
        type: "mcq", 
        options: ["Gram-negative bacteria", "Gram-positive bacteria (e.g., MRSA)", "Fungi", "Viruses"], 
        a: 1, 
        hint: "يُستخدم كـ 'خط دفاع أخير' ضد البكتيريا موجبة الجرام المقاومة مثل MRSA.",
        explanation: "فانكومايسين هو مضاد حيوي قوي يعمل فقط ضد البكتيريا موجبة الجرام (خاصة المقاومة مثل MRSA) لأنه لا يستطيع اختراق الغشاء الخارجي للبكتيريا سالبة الجرام."
      },
      { 
        q: "Sulfonamides work by:", 
        type: "mcq", 
        options: ["Inhibiting cell wall synthesis", "Inhibiting protein synthesis", "Inhibiting DNA gyrase", "Inhibiting folic acid synthesis"], 
        a: 3, 
        hint: "تعمل كـ 'مثبط تنافسي' لإنزيم PABA، وهو ضروري لصنع حمض الفوليك.",
        explanation: "السلفوناميدات تمنع تصنيع حمض الفوليك (Folic acid) الضروري لنمو البكتيريا عن طريق منافسة مادة PABA."
      },
      { 
        q: "Rifampin (Rifampicin) inhibits:", 
        type: "mcq", 
        options: ["DNA gyrase", "RNA polymerase", "Folic acid synthesis", "Protein synthesis"], 
        a: 1, 
        hint: "يمنع هذا الإنزيم من نسخ الحمض النووي (DNA) إلى الحمض النووي الريبي (RNA).",
        explanation: "الريفامبين يثبط إنزيم RNA polymerase، مما يمنع عملية النسخ (Transcription) وتصنيع الـ mRNA."
      },
      { 
        q: "Quinolones (e.g., Ciprofloxacin) inhibit:", 
        type: "mcq", 
        options: ["DNA gyrase (Topoisomerase)", "RNA polymerase", "Cell wall synthesis", "Protein synthesis"], 
        a: 0, 
        hint: "هذا الإنزيم ضروري لـ 'فك' التفاف الحمض النووي (DNA) أثناء التضاعف.",
        explanation: "الكينولونات تستهدف إنزيم DNA gyrase، وهو المسؤول عن فك التفاف الحمض النووي أثناء التضاعف."
      },
      { 
        q: "An antibiotic that is effective against a wide range of bacteria is:", 
        type: "mcq", 
        options: ["Narrow-spectrum", "Broad-spectrum", "Bacteriostatic", "Bactericidal"], 
        a: 1, 
        hint: "واسع المجال (Broad-spectrum) يعني أنه يؤثر على بكتيريا موجبة وسالبة الجرام.",
        explanation: "المضاد الحيوي واسع المجال (Broad-spectrum) هو الذي يقتل أو يثبط أنواعاً متعددة من البكتيريا (موجبة وسالبة الجرام)."
      },
      { 
        q: "An antibiotic that kills bacteria is:", 
        type: "mcq", 
        options: ["Bacteriostatic", "Bactericidal", "Antiseptic", "Disinfectant"], 
        a: 1, 
        hint: "كلمة 'Cidal' تعني 'قاتل'.",
        explanation: "Bactericidal يعني قاتل للبكتيريا، بينما Bacteriostatic يعني أنه يوقف نموها فقط ويترك للمناعة مهمة القضاء عليها."
      },
      { 
        q: "The lowest concentration of an antibiotic that inhibits visible growth is:", 
        type: "mcq", 
        options: ["MIC (Minimum Inhibitory Concentration)", "MBC (Minimum Bactericidal Concentration)", "LD50", "Therapeutic index"], 
        a: 0, 
        hint: "MIC = أقل تركيز مثبط.",
        explanation: "MIC هو أقل تركيز من المضاد الحيوي يكفي لمنع النمو المرئي للبكتيريا في المعمل."
      },
      { 
        q: "Beta-lactamase (Penicillinase) production is a mechanism of:", 
        type: "mcq", 
        options: ["Antibiotic synergism", "Antibiotic antagonism", "Antibiotic resistance", "Selective toxicity"], 
        a: 2, 
        hint: "هذا الإنزيم 'يدمر' المضاد الحيوي (مثل البنسلين) قبل أن يعمل.",
        explanation: "إنتاج إنزيمات بيتا-لاكتاماز هي وسيلة مقاومة بكتيرية، حيث تقوم هذه الإنزيمات بتكسير حلقة البيتا-لاكتام في البنسلين وإبطال مفعوله."
      },
      { 
        q: "Which of the following is NOT a mechanism of antibiotic resistance?", 
        type: "mcq", 
        options: ["Enzymatic destruction (e.g., Beta-lactamase)", "Altered target site", "Decreased permeability/efflux pump", "Increased synthesis of the target"], 
        a: 3, 
        hint: "البكتيريا لا تقاوم عن طريق زيادة تصنيع الهدف، بل العكس هو الصحيح (تغيير الهدف).",
        explanation: "آليات المقاومة تشمل تدمير الدواء، أو تغيير الهدف، أو ضخ الدواء للخارج. زيادة تصنيع الهدف ليست آلية شائعة للمقاومة."
      },
      { 
        q: "Combining Penicillin and Gentamicin is an example of:", 
        type: "mcq", 
        options: ["Synergism", "Antagonism", "Resistance", "Indifference"], 
        a: 0, 
        hint: "التآزر (Synergism) يعني أن 1+1 = 3 (التأثير المشترك أقوى من مجموعهما).",
        explanation: "هذا مثال على التآزر (Synergism)، حيث يسهل البنسلين دخول الجنتاميسين للخلية، فيكون تأثيرهما معاً أقوى بكثير من كل واحد بمفرده."
      },
      { 
        q: "Which antibiotic is known for causing 'Red Man Syndrome' if infused too quickly?", 
        type: "mcq", 
        options: ["Penicillin", "Vancomycin", "Tetracycline", "Ciprofloxacin"], 
        a: 1, 
        hint: "يحدث بسبب تحرر الهيستامين السريع.",
        explanation: "متلازمة الرجل الأحمر هي تفاعل تحسسي (إفراز هيستامين) يحدث عند حقن الفانكومايسين بسرعة في الوريد."
      },
      { 
        q: "Which antibiotic is associated with 'grey baby syndrome'?", 
        type: "mcq", 
        options: ["Chloramphenicol", "Streptomycin", "Penicillin", "Erythromycin"], 
        a: 0, 
        hint: "يحدث في الأطفال حديثي الولادة لعدم قدرتهم على معالجة الدواء.",
        explanation: "الكلورامفينيكول يسبب متلازمة الطفل الرمادي في الرضع لأن كبدهم غير ناضج ولا يستطيع التخلص من الدواء المتراكم."
      },
      { 
        q: "Which drug is used to treat Tuberculosis (TB)?", 
        type: "mcq", 
        options: ["Isoniazid (INH)", "Rifampin", "Ethambutol", "All of the above"], 
        a: 3, 
        hint: "علاج السل يتطلب دائماً مزيجاً من عدة أدوية (RIPE).",
        explanation: "علاج السل يتطلب بروتوكولاً متعدد الأدوية (INH, Rifampin, Ethambutol, Pyrazinamide) لمنع المقاومة."
      },
      { 
        q: "Isoniazid (INH) specifically inhibits the synthesis of:", 
        type: "mcq", 
        options: ["Peptidoglycan", "Mycolic acids", "Proteins", "Folic acid"], 
        a: 1, 
        hint: "هذه الأحماض هي المكون الشمعي المميز لجدار خلية بكتيريا السل (Mycobacteria).",
        explanation: "Isoniazid يعمل تحديداً عن طريق منع تصنيع أحماض الميكوليك (Mycolic acids) التي تغلف بكتيريا السل."
      },
      { 
        q: "Polymyxins are antibiotics that:", 
        type: "mcq", 
        options: ["Inhibit cell wall", "Inhibit protein synthesis", "Disrupt the cell membrane", "Inhibit DNA synthesis"], 
        a: 2, 
        hint: "تعمل كـ 'منظفات' (detergents) تذيب الغشاء الخلوي، وهي سامة للكلى.",
        explanation: "البوليميكسين يعمل كمنظف (Detergent) يدمر الغشاء الخلوي للبكتيريا، ولكنه سام جداً للكلى."
      },
      { 
        q: "'Selective toxicity' means the drug is:", 
        type: "mcq", 
        options: ["Toxic to all cells", "More toxic to the pathogen than the host", "Only toxic to the host", "Not toxic at all"], 
        a: 1, 
        hint: "السمية 'الانتقائية' هي المبدأ الذهبي للعلاج الكيميائي: استهداف الميكروب دون الإضرار بالمضيف.",
        explanation: "السمية الانتقائية تعني قدرة الدواء على قتل الميكروب دون إلحاق ضرر بخلايا المريض."
      }
    ]
  },
  general_tf: {
    title: "Basic Knowledge Test (True/False)",
    questions: [
      { 
        q: "Gram-positive bacteria stain red after staining.", 
        type: "tf", 
        a: false, 
        hint: "اللون الأحمر (السافرنين) هو الصبغة المضادة. موجبة الجرام تحتفظ باللون البنفسجي الأول.",
        explanation: "خطأ. البكتيريا موجبة الجرام تصبغ باللون البنفسجي (Purple/Blue) لأن جدارها السميك يحتفظ بالصبغة الأولى."
      },
      { 
        q: "Gram-negative bacteria contain a thin layer of peptidoglycan.", 
        type: "tf", 
        a: true, 
        hint: "ولهذا السبب تفقد اللون البنفسجي بسهولة وتأخذ اللون الأحمر.",
        explanation: "صح. البكتيريا سالبة الجرام لديها طبقة ببتيدوجلايكان رقيقة جداً، ولهذا تفقد الصبغة الأولى وتأخذ اللون الأحمر."
      },
      { 
        q: "Mycoplasma is the only bacterium that does not have a cell wall.", 
        type: "tf", 
        a: true, 
        hint: "لهذا السبب، المضادات الحيوية التي تستهدف جدار الخلية (مثل البنسلين) لا تؤثر عليها.",
        explanation: "صح. الميكوبلازما هي الاستثناء الوحيد طبياً للبكتيريا التي لا تمتلك جداراً خلوياً."
      },
      { 
        q: "Spores are a method of bacterial reproduction.", 
        type: "tf", 
        a: false, 
        hint: "هي وسيلة للبقاء (Survival) في الظروف القاسية، وليست للتكاث.",
        explanation: "خطأ. الأبواغ (Spores) هي وسيلة للحماية والبقاء في الظروف الصعبة، وليست وسيلة تكاثر (الخلية الواحدة تعطي بوغاً واحداً)."
      },
      { 
        q: "Mesophiles grow best at 37°C.", 
        type: "tf", 
        a: true, 
        hint: "Meso تعني 'متوسط'، وهي درجة حرارة جسم الإنسان.",
        explanation: "صح. Mesophiles تفضل درجات الحرارة المتوسطة (مثل حرارة الجسم 37 درجة)."
      },
      { 
        q: "Obligate anaerobes die in the presence of oxygen.", 
        type: "tf", 
        a: true, 
        hint: "الأكسجين سام بالنسبة لها لأنها تفتقر للإنزيمات (مثل الكاتالاز) لتحييده.",
        explanation: "صح. اللاهوائية الإجبارية تموت في وجود الأكسجين لأنها تفتقر للإنزيمات التي تحميها من نواتجه السامة."
      },
      { 
        q: "Sterilization is the elimination of all microbial life forms, including spores.", 
        type: "tf", 
        a: true, 
        hint: "هذا هو الفرق الرئيسي بين التعقيم والتطهير.",
        explanation: "صح. هذا هو التعريف الدقيق للتعقيم: القضاء التام على كل شيء بما في ذلك الأبواغ."
      },
      { 
        q: "Disinfection kills bacterial spores.", 
        type: "tf", 
        a: false, 
        hint: "التطهير يقتل معظم الميكروبات، لكنه لا يقضي على الأبواغ المقاومة.",
        explanation: "خطأ. التطهير (Disinfection) يقتل الخلايا الخضرية ولكنه غالباً لا يؤثر على الأبواغ."
      },
      { 
        q: "The Autoclave uses dry heat for sterilization.", 
        type: "tf", 
        a: false, 
        hint: "الأوتوكلاف يستخدم بخار (حرارة رطبة) تحت ضغط. الفرن (Oven) هو الذي يستخدم حرارة جافة.",
        explanation: "خطأ. الأوتوكلاف يستخدم الحرارة الرطبة (بخار تحت ضغط)، وهي أكثر كفاءة من الحرارة الجافة."
      },
      { 
        q: "Penicillin works by inhibiting protein synthesis in bacteria.", 
        type: "tf", 
        a: false, 
        hint: "البنسلين يهاجم جدار الخلية (Cell wall).",
        explanation: "خطأ. البنسلين يثبط تصنيع جدار الخلية (Cell wall)، وليس البروتين."
      },
      { 
        q: "Tetracycline works by inhibiting the 30S ribosomal subunit.", 
        type: "tf", 
        a: true, 
        hint: "مضادات حيوية أخرى (مثل الماكروليدات) تستهدف وحدة 50S.",
        explanation: "صح. التتراسيكلين يوقف تصنيع البروتين عن طريق الارتباط بوحدة 30S."
      },
      { 
        q: "Plasmids are an essential part of the bacterial chromosome.", 
        type: "tf", 
        a: false, 
        hint: "هي قطع DNA إضافية (Extrachromosomal) خارج الكروموسوم.",
        explanation: "خطأ. البلازميدات هي DNA إضافي خارج الكروموسوم، وليست جزءاً منه."
      },
      { 
        q: "Pili are used for bacterial motility.", 
        type: "tf", 
        a: false, 
        hint: "الأسواط (Flagella) هي التي تستخدم للحركة. الأهداب تستخدم للالتصاق.",
        explanation: "خطأ. Pili تستخدم للالتصاق، بينما Flagella (الأسواط) تستخدم للحركة."
      },
      { 
        q: "The capsule helps bacteria resist phagocytosis.", 
        type: "tf", 
        a: true, 
        hint: "تجعل البكتيريا 'زلقة' ويصعب على خلايا المناعة ابتلاعها.",
        explanation: "صح. الكبسولة تحمي البكتيريا من الابتلاع بواسطة خلايا الدم البيضاء."
      },
      { 
        q: "The Log Phase is the fastest phase of bacterial growth.", 
        type: "tf", 
        a: true, 
        hint: "تُعرف أيضاً بالمرحلة الأسية (Exponential) حيث تتضاعف البكتيريا بأقصى سرعة.",
        explanation: "صح. في Log Phase يكون معدل النمو والانقسام في ذروته."
      },
      { 
        q: "An antiseptic is used to disinfect inanimate surfaces and tools.", 
        type: "tf", 
        a: false, 
        hint: "المطهر (Antiseptic) يستخدم على الأنسجة الحية (مثل الجلد). المعقم (Disinfectant) هو الذي يستخدم للأسطح.",
        explanation: "خطأ. Antiseptic يستخدم للأنسجة الحية، بينما Disinfectant يستخدم للأسطح غير الحية."
      },
      { 
        q: "Endotoxin is found only in Gram-positive bacteria.", 
        type: "tf", 
        a: false, 
        hint: "يوجد في البكتيريا سالبة الجرام (Gram-negative) كجزء من غشائها الخارجي (LPS).",
        explanation: "خطأ. Endotoxin يوجد حصرياً في البكتيريا سالبة الجرام (جزء من الجدار)."
      },
      { 
        q: "Normal flora is naturally found in the blood.", 
        type: "tf", 
        a: false, 
        hint: "الدم يجب أن يكون معقماً (Sterile). وجود بكتيريا في الدم يعني عدوى.",
        explanation: "خطأ. الدم معقم ولا يحتوي على فلورا طبيعية."
      }
    ]
  }
};      { q: "Babies acquire their initial normal flora:", type: "mcq", options: ["In the uterus (sterile)", "During and after birth", "From antibiotics", "They are born with it"], a: 1, hint: "الرحم بيئة معقمة. يبدأ الاستعمار الميكروبي عند الولادة." }
    ]
  },
  sterilization: {
    title: "Sterilization & Disinfection",
    questions: [
      { q: "The complete killing or removal of all forms of life, including spores, is:", type: "mcq", options: ["Disinfection", "Sterilization", "Antisepsis", "Sanitization"], a: 1, hint: "التعقيم هو المستوى الأعلى، ويضمن القضاء التام." },
      { q: "The reduction of microbial load to a safe public health level is:", type: "mcq", options: ["Disinfection", "Sterilization", "Antisepsis", "Sanitization"], a: 3, hint: "هذا المصطلح يستخدم غالباً في خدمات الطعام (مثل غسل الأطباق)." },
      { q: "Which of the following is the most resistant to sterilization?", type: "mcq", options: ["Vegetative bacteria", "Viruses (enveloped)", "Fungal spores", "Bacterial endospores"], a: 3, hint: "الأبواغ البكتيرية مصممة للبقاء على قيد الحياة في الظروف القاسية." },
      { q: "The standard condition for autoclaving (steam under pressure) is:", type: "mcq", options: ["100°C for 30 min", "121°C for 15 min", "160°C for 2 hours", "72°C for 15 sec"], a: 1, hint: "هذه هي الحرارة والبخار (الضغط) اللازم لقتل الأبواغ." },
      { q: "Autoclaving kills by:", type: "mcq", options: ["Denaturing proteins", "Oxidation", "Alkylation", "Radiation damage"], a: 0, hint: "البخار تحت الضغط ينقل الحرارة بكفاءة، مما يؤدي إلى 'تخثر' أو 'تدمير' البروتينات." },
      { q: "Dry heat sterilization (hot air oven) requires:", type: "mcq", options: ["121°C for 15 min", "100°C for 1 hour", "160°C for 2 hours", "Lower temp than autoclaving"], a: 2, hint: "الحرارة الجافة أقل كفاءة من الحرارة الرطبة، لذا فهي تحتاج درجة حرارة أعلى ووقت أطول." },
      { q: "Pasteurization is used to:", type: "mcq", options: ["Sterilize milk", "Reduce microbial load in milk", "Kill spores in milk", "Make milk thicker"], a: 1, hint: "البسترة لا تقتل كل شيء (ليست تعقيماً)، لكنها تقتل الميكروبات الممرضة وتقلل التلف." },
      { q: "The (HTST) pasteurization method is:", type: "mcq", options: ["63°C for 30 min", "72°C for 15 sec", "140°C for 3 sec (UHT)", "100°C for 10 min"], a: 1, hint: "HTST = High Temperature Short Time (درجة حرارة عالية لوقت قصير)." },
      { q: "Which of the following is a form of ionizing radiation?", type: "mcq", options: ["UV light", "Gamma rays", "Microwaves", "Infrared"], a: 1, hint: "الأشعة المؤينة (Ionizing) أقوى بكثير من الأشعة فوق البنفسجية (غير المؤينة)." },
      { q: "Ionizing radiation (Gamma) is used to sterilize:", type: "mcq", options: ["Sutures and plastic syringes", "Surgical instruments (metal)", "Glassware", "Culture media"], a: 0, hint: "تُستخدم للمواد التي لا تتحمل الحرارة، مثل البلاستيك." },
      { q: "UV light sterilizes by:", type: "mcq", options: ["Creating hydroxyl radicals", "Causing thymine dimers in DNA", "Denaturing proteins", "Puncturing the cell wall"], a: 1, hint: "الأشعة فوق البنفسجية تدمر الحمض النووي (DNA) مباشرة." },
      { q: "UV light is limited by its:", type: "mcq", options: ["High cost", "Poor penetrating power", "Toxicity", "Flammability"], a: 1, hint: "لا يمكنها اختراق الأسطح، لذا هي مناسبة لتعقيم الأسطح والهواء فقط." },
      { q: "Filtration is used to sterilize:", type: "mcq", options: ["Heat-labile liquids (e.g., serum)", "Glassware", "Metal instruments", "Plastic tubing"], a: 0, hint: "تُستخدم للسوائل الحساسة للحرارة عن طريق 'فلترة' البكتيريا منها." },
      { q: "HEPA filters are used to remove microbes from:", type: "mcq", options: ["Liquids", "Air", "Surfaces", "Food"], a: 1, hint: "تستخدم في غرف العمليات وأنظمة السلامة البيولوجية لتنقية الهواء." },
      { q: "Which of the following is a halogen disinfectant?", type: "mcq", options: ["Alcohol", "Phenol", "Chlorine (Bleach)", "Formaldehyde"], a: 2, hint: "الهالوجينات هي عناصر المجموعة 17 (مثل الكلور واليود)." },
      { q: "70% alcohol is more effective than 95% alcohol because:", type: "mcq", options: ["It evaporates slower", "Water is needed for protein denaturation", "It penetrates better", "All of the above"], a: 3, hint: "الماء الموجود في تركيز 70% ضروري لعملية تدمير البروتينات ويساعد على الاختراق." },
      { q: "Which chemical is used for 'cold sterilization' of surgical instruments?", type: "mcq", options: ["70% Alcohol", "Iodine", "Glutaraldehyde", "Soap"], a: 2, hint: "هذا المركب قوي بما يكفي لقتل الأبواغ عند استخدامه لفترة كافية." },
      { q: "Ethylene oxide is a:", type: "mcq", options: ["Liquid disinfectant", "Gas used for sterilization", "Halogen", "Phenolic compound"], a: 1, hint: "يُستخدم كغاز لتعقيم المواد الحساسة للحرارة والرطوبة." },
      { q: "A disinfectant used on living tissue (skin) is called:", type: "mcq", options: ["Sterilant", "Disinfectant", "Antiseptic", "Sanitizer"], a: 2, hint: "كلمة 'Antiseptic' (مطهر) تستخدم للأنسجة الحية، بينما 'Disinfectant' (معقم) للأسطح." },
      { q: "Phenol coefficient is used to:", type: "mcq", options: ["Measure the effectiveness of a disinfectant", "Count bacteria", "Test for sterility", "Identify bacteria"], a: 0, hint: "هو مقياس يقارن فعالية مطهر ما بفعالية الفينول." }
    ]
  },
  chemotherapy: {
    title: "Antimicrobial Chemotherapy",
    questions: [
      { q: "Which of the following inhibits cell wall synthesis?", type: "mcq", options: ["Penicillin", "Tetracycline", "Rifampin", "Sulfonamides"], a: 0, hint: "هذه هي آلية عمل عائلة البيتا لاكتام (Beta-lactams)." },
      { q: "Penicillin's mechanism of action is inhibition of:", type: "mcq", options: ["Protein synthesis (50S)", "Protein synthesis (30S)", "Transpeptidation (cell wall)", "Nucleic acid synthesis"], a: 2, hint: "يمنع هذا الإنزيم من تكوين الروابط العرضية في جدار الخلية." },
      { q: "Which of the following targets the 30S ribosomal subunit?", type: "mcq", options: ["Tetracycline", "Erythromycin", "Chloramphenicol", "Vancomycin"], a: 0, hint: "يعمل عن طريق منع ارتباط t-RNA بالريبوسوم." },
      { q: "Which of the following targets the 50S ribosomal subunit?", type: "mcq", options: ["Gentamicin", "Erythromycin (Macrolides)", "Ciprofloxacin", "Penicillin"], a: 1, hint: "هذه العائلة (الماكروليدات) تمنع الريبوسوم من التحرك على طول mRNA." },
      { q: "Vancomycin is effective against:", type: "mcq", options: ["Gram-negative bacteria", "Gram-positive bacteria (e.g., MRSA)", "Fungi", "Viruses"], a: 1, hint: "يُستخدم كـ 'خط دفاع أخير' ضد البكتيريا موجبة الجرام المقاومة مثل MRSA." },
      { q: "Sulfonamides work by:", type: "mcq", options: ["Inhibiting cell wall synthesis", "Inhibiting protein synthesis", "Inhibiting DNA gyrase", "Inhibiting folic acid synthesis"], a: 3, hint: "تعمل كـ 'مثبط تنافسي' لإنزيم PABA، وهو ضروري لصنع حمض الفوليك." },
      { q: "Rifampin (Rifampicin) inhibits:", type: "mcq", options: ["DNA gyrase", "RNA polymerase", "Folic acid synthesis", "Protein synthesis"], a: 1, hint: "يمنع هذا الإنزيم من نسخ الحمض النووي (DNA) إلى الحمض النووي الريبي (RNA)." },
      { q: "Quinolones (e.g., Ciprofloxacin) inhibit:", type: "mcq", options: ["DNA gyrase (Topoisomerase)", "RNA polymerase", "Cell wall synthesis", "Protein synthesis"], a: 0, hint: "هذا الإنزيم ضروري لـ 'فك' التفاف الحمض النووي (DNA) أثناء التضاعف." },
      { q: "An antibiotic that is effective against a wide range of bacteria is:", type: "mcq", options: ["Narrow-spectrum", "Broad-spectrum", "Bacteriostatic", "Bactericidal"], a: 1, hint: "واسع المجال (Broad-spectrum) يعني أنه يؤثر على بكتيريا موجبة وسالبة الجرام." },
      { q: "An antibiotic that kills bacteria is:", type: "mcq", options: ["Bacteriostatic", "Bactericidal", "Antiseptic", "Disinfectant"], a: 1, hint: "كلمة 'Cidal' تعني 'قاتل'." },
      { q: "The lowest concentration of an antibiotic that inhibits visible growth is:", type: "mcq", options: ["MIC (Minimum Inhibitory Concentration)", "MBC (Minimum Bactericidal Concentration)", "LD50", "Therapeutic index"], a: 0, hint: "MIC = أقل تركيز مثبط." },
      { q: "Beta-lactamase (Penicillinase) production is a mechanism of:", type: "mcq", options: ["Antibiotic synergism", "Antibiotic antagonism", "Antibiotic resistance", "Selective toxicity"], a: 2, hint: "هذا الإنزيم 'يدمر' المضاد الحيوي (مثل البنسلين) قبل أن يعمل." },
      { q: "Which of the following is NOT a mechanism of antibiotic resistance?", type: "mcq", options: ["Enzymatic destruction (e.g., Beta-lactamase)", "Altered target site", "Decreased permeability/efflux pump", "Increased synthesis of the target"], a: 3, hint: "البكتيريا لا تقاوم عن طريق زيادة تصنيع الهدف، بل العكس هو الصحيح (تغيير الهدف)." },
      { q: "Combining Penicillin and Gentamicin is an example of:", type: "mcq", options: ["Synergism", "Antagonism", "Resistance", "Indifference"], a: 0, hint: "التآزر (Synergism) يعني أن 1+1 = 3 (التأثير المشترك أقوى من مجموعهما)." },
      { q: "Which antibiotic is known for causing 'Red Man Syndrome' if infused too quickly?", type: "mcq", options: ["Penicillin", "Vancomycin", "Tetracycline", "Ciprofloxacin"], a: 1, hint: "يحدث بسبب تحرر الهيستامين السريع." },
      { q: "Which antibiotic is associated with 'grey baby syndrome'?", type: "mcq", options: ["Chloramphenicol", "Streptomycin", "Penicillin", "Erythromycin"], a: 0, hint: "يحدث في الأطفال حديثي الولادة لعدم قدرتهم على معالجة الدواء." },
      { q: "Which drug is used to treat Tuberculosis (TB)?", type: "mcq", options: ["Isoniazid (INH)", "Rifampin", "Ethambutol", "All of the above"], a: 3, hint: "علاج السل يتطلب دائماً مزيجاً من عدة أدوية (RIPE)." },
      { q: "Isoniazid (INH) specifically inhibits the synthesis of:", type: "mcq", options: ["Peptidoglycan", "Mycolic acids", "Proteins", "Folic acid"], a: 1, hint: "هذه الأحماض هي المكون الشمعي المميز لجدار خلية بكتيريا السل (Mycobacteria)." },
      { q: "Polymyxins are antibiotics that:", type: "mcq", options: ["Inhibit cell wall", "Inhibit protein synthesis", "Disrupt the cell membrane", "Inhibit DNA synthesis"], a: 2, hint: "تعمل كـ 'منظفات' (detergents) تذيب الغشاء الخلوي، وهي سامة للكلى." },
      { q: "'Selective toxicity' means the drug is:", type: "mcq", options: ["Toxic to all cells", "More toxic to the pathogen than the host", "Only toxic to the host", "Not toxic at all"], a: 1, hint: "السمية 'الانتقائية' هي المبدأ الذهبي للعلاج الكيميائي: استهداف الميكروب دون الإضرار بالمضيف." }
    ]
  },
  general_tf: {
    title: "Basic Knowledge Test (True/False)",
    questions: [
      { q: "Gram-positive bacteria stain red after staining.", type: "tf", a: false, hint: "اللون الأحمر (السافرنين) هو الصبغة المضادة. موجبة الجرام تحتفظ باللون البنفسجي الأول." },
      { q: "Gram-negative bacteria contain a thin layer of peptidoglycan.", type: "tf", a: true, hint: "ولهذا السبب تفقد اللون البنفسجي بسهولة وتأخذ اللون الأحمر." },
      { q: "Mycoplasma is the only bacterium that does not have a cell wall.", type: "tf", a: true, hint: "لهذا السبب، المضادات الحيوية التي تستهدف جدار الخلية (مثل البنسلين) لا تؤثر عليها." },
      { q: "Spores are a method of bacterial reproduction.", type: "tf", a: false, hint: "هي وسيلة للبقاء (Survival) في الظروف القاسية، وليست للتكاث." },
      { q: "Mesophiles grow best at 37°C.", type: "tf", a: true, hint: "Meso تعني 'متوسط'، وهي درجة حرارة جسم الإنسان." },
      { q: "Obligate anaerobes die in the presence of oxygen.", type: "tf", a: true, hint: "الأكسجين سام بالنسبة لها لأنها تفتقر للإنزيمات (مثل الكاتالاز) لتحييده." },
      { q: "Sterilization is the elimination of all microbial life forms, including spores.", type: "tf", a: true, hint: "هذا هو الفرق الرئيسي بين التعقيم والتطهير." },
      { q: "Disinfection kills bacterial spores.", type: "tf", a: false, hint: "التطهير يقتل معظم الميكروبات، لكنه لا يقضي على الأبواغ المقاومة." },
      { q: "The Autoclave uses dry heat for sterilization.", type: "tf", a: false, hint: "الأوتوكلاف يستخدم بخار (حرارة رطبة) تحت ضغط. الفرن (Oven) هو الذي يستخدم حرارة جافة." },
      { q: "Penicillin works by inhibiting protein synthesis in bacteria.", type: "tf", a: false, hint: "البنسلين يهاجم جدار الخلية (Cell wall)." },
      { q: "Tetracycline works by inhibiting the 30S ribosomal subunit.", type: "tf", a: true, hint: "مضادات حيوية أخرى (مثل الماكروليدات) تستهدف وحدة 50S." },
      { q: "Plasmids are an essential part of the bacterial chromosome.", type: "tf", a: false, hint: "هي قطع DNA إضافية (Extrachromosomal) خارج الكروموسوم." },
      { q: "Pili are used for bacterial motility.", type: "tf", a: false, hint: "الأسواط (Flagella) هي التي تستخدم للحركة. الأهداب تستخدم للالتصاق." },
      { q: "The capsule helps bacteria resist phagocytosis.", type: "tf", a: true, hint: "تجعل البكتيريا 'زلقة' ويصعب على خلايا المناعة ابتلاعها." },
      { q: "The Log Phase is the fastest phase of bacterial growth.", type: "tf", a: true, hint: "تُعرف أيضاً بالمرحلة الأسية (Exponential) حيث تتضاعف البكتيريا بأقصى سرعة." },
      { q: "An antiseptic is used to disinfect inanimate surfaces and tools.", type: "tf", a: false, hint: "المطهر (Antiseptic) يستخدم على الأنسجة الحية (مثل الجلد). المعقم (Disinfectant) هو الذي يستخدم للأسطح." },
      { q: "Endotoxin is found only in Gram-positive bacteria.", type: "tf", a: false, hint: "يوجد في البكتيريا سالبة الجرام (Gram-negative) كجزء من غشائها الخارجي (LPS)." },
      { q: "Normal flora is naturally found in the blood.", type: "tf", a: false, hint: "الدم يجب أن يكون معقماً (Sterile). وجود بكتيريا في الدم يعني عدوى." }
    ]
  }
};
