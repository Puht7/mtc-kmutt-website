// ==========================================================================
// MTC - Maintenance Technology Center | KMUTT
// Multilingual Content (TH / EN) & NDT&E Data Store
// ==========================================================================

const siteData = {
  th: {
    nav: {
      about: "เกี่ยวกับศูนย์",
      strengths: "5 เทคโนโลยี NDT&E",
      team: "ทีมวิจัยและผู้เชี่ยวชาญ",
      applications: "การประยุกต์ใช้งาน",
      services: "งานบริการ & วิจัย",
      contact: "ติดต่อเรา",
      cta: "ปรึกษางานวิจัย"
    },
    hero: {
      badge: "ศูนย์เทคโนโลยีการซ่อมบำรุงรักษา มจธ. | NDT Working Group",
      title_start: "ความเป็นเลิศด้านเทคโนโลยี",
      title_highlight: "การทดสอบและประเมินแบบไม่ทำลาย (NDT&E)",
      subtitle: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT) มุ่งสร้างความเข้มแข็งงานวิจัยขั้นสูงด้าน Non-Destructive Testing and Evaluation เพื่อสนับสนุนอุตสาหกรรมการผลิตสมัยใหม่ การเฝ้าระวังความสมบูรณ์เชิงโครงสร้าง และระบบโครงสร้างพื้นฐานการคมนาคมขนส่ง",
      btn_explore: "สำรวจ 5 เทคโนโลยีหลัก",
      btn_contact: "ร่วมมือทางวิจัยและอุตสาหกรรม",
      stats: [
        { label: "เทคโนโลยี NDT&E หลัก", value: "5 ด้าน" },
        { label: "ทีมอาจารย์ & นักวิจัย", value: "8 ท่าน" },
        { label: "Citations รวม (Scopus)", value: "1,000+", highlight: true },
        { label: "เฝ้าระวังโครงสร้าง Real-Time", value: "24/7" },
        { label: "มาตรฐานสากลอุตสาหกรรม", value: "ISO/ASNT" }
      ]
    },
    about: {
      badge: "ABOUT MTC & KMUTT",
      title: "ศูนย์เทคโนโลยีการซ่อมบำรุงรักษา มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
      desc_1: "Maintenance Technology Center (MTC) ร่วมกับกลุ่มวิจัย Novel Detection Development Technology (NDT) Working Group มุ่งเน้นการวิจัย พัฒนา และประยุกต์ใช้องค์ความรู้ด้านวิศวกรรมการตรวจสอบและซ่อมบำรุงรักษาขั้นสูง เพื่อยกระดับความปลอดภัย ความน่าเชื่อถือ และอายุการใช้งานของโครงสร้างและเครื่องจักรในภาคอุตสาหกรรม",
      desc_2: "ด้วยความเชี่ยวชาญของคณาจารย์ นักวิจัย และเครื่องมือตรวจวัดที่ทันสมัย มจธ. ได้พัฒนาทั้งระบบฮาร์ดแวร์เซนเซอร์ความเร็วสูง และอัลกอริทึมการประมวลผลสัญญาณอัจฉริยะที่ตอบโจทย์ความท้าทายของโครงสร้างพื้นฐานระดับชาติ เช่น ทางรถไฟ สะพาน โรงกลั่น และชิ้นส่วนอากาศยาน",
      pillars: [
        {
          title: "งานวิจัยและนวัตกรรมชั้นแนวหน้า",
          desc: "คิดค้นกรรมวิธีและอัลกอริทึมใหม่ด้าน NDT&E ที่มีความจำเพาะสูงและแม่นยำ"
        },
        {
          title: "บริการตรวจวัดและแก้ปัญหาอุตสาหกรรม",
          desc: "ถ่ายทอดเทคโนโลยีและให้บริการวิเคราะห์ตรวจสอบความเสียหายในระดับลึก"
        },
        {
          title: "การตรวจวัดความสมบูรณ์เชิงโครงสร้าง (SHM)",
          desc: "พัฒนาระบบเฝ้าระวังแบบ Real-time ตลอดอายุการใช้งานของโครงสร้าง"
        }
      ]
    },
    technologies: {
      badge: "CORE CAPABILITIES",
      title: "5 จุดเด่นด้านเทคโนโลยี NDT&E",
      subtitle: "Technological Strengths in Non-Destructive Testing and Evaluation",
      click_hint: "คลิกที่การ์ดเพื่อดูรายละเอียดทางเทคนิค อุปกรณ์ และการนำไปใช้",
      items: [
        {
          id: "acoustic-emission",
          number: "01",
          icon: "activity",
          tag: "Acoustic Emission",
          title: "Acoustic Emission Systems",
          title_th: "ระบบตรวจวัดคลื่นเสียงความถี่สูง",
          summary: "การศึกษาบุกเบิกด้านการระบุตำแหน่งแหล่งกำเนิดสัญญาณ (Source Location) เพื่อจำแนกและประเมินการกัดกร่อนโครงสร้าง โดยไม่ทำลายชิ้นงานและไม่ต้องหยุดการทำงานของระบบ",
          detail_lead: "pioneering studies on source location using acoustic emission systems to identify and classify various types of structural corrosion without damaging the materials.",
          details: [
            "การตรวจจับพลังงานคลื่นยืดหยุ่น (Transient elastic waves) ที่ปลดปล่อยออกมาอย่างฉับพลันเมื่อวัสดุเกิดการแตกร้าว หรือเกิดการกัดกร่อนทางเคมี",
            "อัลกอริทึมคำนวณพิกัดการเกิดรอยร้าวแบบ 2D และ 3D (Time Difference of Arrival - TDOA) แม่นยำสูง",
            "การจำแนกประเภทการกัดกร่อน (Pitting, Stress Corrosion Cracking) ด้วยการวิเคราะห์สัญญาณ Waveform Streaming",
            "เหมาะสำหรับการตรวจสอบถังบรรจุความดัน ท่อส่งสารเคมี และชิ้นส่วนสะพานขณะรับแรงจริง"
          ],
          equipment: "Multi-channel AE Data Acquisition System, Wideband Piezoelectric Sensors, Pre-amplifiers",
          applications: "ท่อก๊าซและปิโตรเคมี, ถังรับแรงดันสูง, โครงสร้างคอนกรีตเสริมเหล็ก, คานสะพาน"
        },
        {
          id: "ultrasonic-testing",
          number: "02",
          icon: "radio",
          tag: "UT & EM Testing",
          title: "Advanced Ultrasonic and Electromagnetic Testing",
          title_th: "การทดสอบด้วยคลื่นเสียงความถี่สูงและแม่เหล็กไฟฟ้าขั้นสูง",
          summary: "ความเชี่ยวชาญทั้งเชิงทฤษฎีและการประยุกต์ ครอบคลุมการทดสอบ Ultrasonic Testing (UT), Eddy Current Testing (ET) และ Magnetic Particle Testing (MT) เพื่อตรวจสอบความสมบูรณ์ของวัสดุ",
          detail_lead: "expertise in fundamental and applied methodologies encompassing Ultrasonic Testing (UT), Eddy Current Testing, and Magnetic Particle Testing to verify material integrity.",
          details: [
            "Phased Array Ultrasonic Testing (PAUT) และ Time of Flight Diffraction (TOFD) สำหรับสแกนรอยเชื่อมและเนื้อวัสดุเชิงลึก",
            "Eddy Current Testing (กระแสไหลวน) ตรวจจับรอยแตกร้าวที่ผิวและใต้ผิวโลหะนำไฟฟ้าอย่างรวดเร็วโดยไม่ต้องสัมผัสตรง",
            "Magnetic Particle Testing (MT) ตรวจสอบความต่อเนื่องของผิวและโครงสร้างสารแม่เหล็ก",
            "การวัดความหนาเนื้อโลหะและการทำแผนที่การสึกกร่อน (Corrosion Mapping) ด้วยความละเอียดสูง"
          ],
          equipment: "Phased Array Flaw Detectors, Dual Element Transducers, Eddy Current Scanners, Yoke Magnetizers",
          applications: "การตรวจสอบรอยเชื่อมท่อ, ใบพัดกังหันไอน้ำ/กังหันก๊าซ, ชิ้นส่วนโครงสร้างอากาศยาน, ชิ้นส่วนยานยนต์"
        },
        {
          id: "high-speed-inspection",
          number: "03",
          icon: "gauge",
          tag: "High-Speed Inspection",
          title: "High-Speed Industrial Inspection",
          title_th: "การตรวจวัดความเร็วสูงสำหรับภาคอุตสาหกรรม",
          summary: "การพัฒนาเทคนิคตรวจสอบความเร็วสูงโดยใช้เซนเซอร์ตรวจจับการเคลื่อนไหวและการสั่นสะเทือน ประยุกต์ใช้เพื่อความปลอดภัยในโครงสร้างพื้นฐานระดับวิกฤต เช่น รางรถไฟความเร็วสูง",
          detail_lead: "development of high-speed inspection techniques based on motion sensors, heavily utilized for critical infrastructure such as surface railway tracks.",
          details: [
            "ระบบตรวจวัดสภาพผิวรางรถไฟ (Surface Railway Tracks) และความผิดปกติของรางขณะขบวนรถเคลื่อนที่ด้วยความเร็ว",
            "การรวมเซนเซอร์วัดความเร่ง (Accelerometers), เลเซอร์โปรไฟล์ และเซนเซอร์วัดระยะทาง (LVDT/Optical)",
            "ระบบตรวจจับ Rail Corrugation, รอยแตกลึกที่หัวราง (Head Checks) และความไม่สม่ำเสมอของระนาบทางวิ่ง",
            "การแจ้งเตือนความเสี่ยงล่วงหน้า (Predictive Warning) เพื่อวางแผนซ่อมบำรุงก่อนเกิดความเสียหายรุนแรง"
          ],
          equipment: "Dynamic Motion Sensors, High-Speed Optical Profilers, Onboard Data Logging Units",
          applications: "ระบบรถไฟฟ้าขนส่งมวลชน, ทางรถไฟระหว่างเมือง, สายพานลำเลียงความเร็วสูงในเหมืองและท่าเรือ"
        },
        {
          id: "radiation-detection",
          number: "04",
          icon: "scan",
          tag: "Radiation Algorithms",
          title: "Radiation-Based Object Detection Algorithms",
          title_th: "อัลกอริทึมตรวจจับวัตถุและรอยตำหนิด้วยรังสี",
          summary: "การพัฒนาและยกระดับอัลกอริทึมประมวลผลภาพถ่ายทางรังสี (Radiographic Testing) เพื่อเพิ่มความแม่นยำในการตรวจหารอยบกพร่องและสิ่งแปลกปลอมในชิ้นงานที่มีรูปทรงซับซ้อน",
          detail_lead: "enhanced algorithm development tailored for radiation-based non-destructive testing to improve defect detection accuracy in complex components.",
          details: [
            "อัลกอริทึม Computer Vision และ Deep Learning ในการจำแนกชนิดรอยเชื่อมบกพร่อง (Porosity, Slag Inclusion, Incomplete Penetration)",
            "การปรับปรุงคุณภาพภาพถ่ายรังสีดิจิทัล (Digital Radiography - DR / Computed Tomography - CT) แบบลดสัญญาณรบกวน",
            "การวัดขนาดและการจำลองโครงสร้างภายใน 3D เพื่อตรวจสอบความหนาแน่นและช่องว่างภายใน",
            "ลดความคลาดเคลื่อนจากสายตามนุษย์ และเพิ่มความเร็วในการตัดสินผลการทดสอบเชิงอุตสาหกรรม"
          ],
          equipment: "Digital Radiography Imaging Software, Industrial X-ray Image Processing Pipeline",
          applications: "ชิ้นงานหล่อโลหะความแม่นยำสูง (Precision Castings), ชิ้นส่วนอิเล็กทรอนิกส์, อุตสาหกรรมป้องกันประเทศ"
        },
        {
          id: "automation-signal-processing",
          number: "05",
          icon: "cpu",
          tag: "Automation & AI",
          title: "Automation and Signal Processing Integration",
          title_th: "การผสานระบบอัตโนมัติและการประมวลผลสัญญาณ",
          summary: "การผสานฮาร์ดแวร์ NDT&E แบบดั้งเดิมเข้ากับขั้นตอนวิธีประมวลผลสัญญาณขั้นสูง (Advanced Algorithmic Signal Processing) สำหรับการประเมินผลอัตโนมัติและเชื่อถือได้สูงในสภาพแวดล้อม Real-Time",
          detail_lead: "merging traditional NDT&E hardware with advanced algorithmic signal processing for automated, highly reliable evaluations in real-time environments.",
          details: [
            "การพัฒนา Pipeline การกรองสัญญาณรบกวน (Adaptive Wavelet Denoising, Empirical Mode Decomposition)",
            "การประเมินสภาพโครงสร้างแบบอัตโนมัติ (Automated Defect Classification) โดยใช้โมเดล Machine Learning",
            "ระบบรายงานผลแบบ Real-Time Dashboard พร้อมการคำนวณดัชนีความเสี่ยง (Structural Integrity Health Index)",
            "การบูรณาการระบบ Edge Computing เพื่อให้การตัดสินใจด้านความปลอดภัยเกิดขึ้นทันทีหน้างาน"
          ],
          equipment: "Edge Computing Units, Real-Time Signal Analyzers, Customized DSP/AI Inference Boards",
          applications: "โรงงานอัจฉริยะ (Smart Manufacturing Industry 4.0), แพลตฟอร์มตรวจสอบแท่นขุดเจาะนอกชายฝั่ง, อาคารสูง"
        }
      ]
    },
    team: {
      badge: "KMUTT NDT RESEARCH TEAM",
      title: "ทีมวิจัยและผู้เชี่ยวชาญ",
      subtitle: "Team Profile and Expertise — การรวมตัวของคณาจารย์และนักวิจัยสหสาขาวิชาชีพเพื่อขับเคลื่อนนวัตกรรม NDT&E",
      role_in_project_lbl: "บทบาทในโครงการ (Role in the Project):",
      key_expertise_lbl: "ความเชี่ยวชาญหลัก (Key Expertise):",
      scopus_btn_lbl: "Scopus Profile",
      members: [
        {
          id: "member-1",
          order: 1,
          name: "Assoc. Prof. Wachira Methong",
          name_th: "รศ. วชิระ มีทอง",
          initials: "WM",
          position: "Consultant, Department of Production Engineering / MTC / KINGWELD",
          position_th: "ที่ปรึกษา, ภาควิชาวิศวกรรมการผลิต มจธ. / MTC / KINGWELD",
          category: "consultant",
          image: "assets/images/team-1.png",
          scopus: null,
          profile: "Assoc. Prof. Wachira Methong มีความเชี่ยวชาญลึกซึ้งด้านวิศวกรรมการผลิต มีประสบการณ์สูงในระบบการวัดและระเบียบวิธีการตรวจสอบ เพื่อรองรับการพัฒนาแพลตฟอร์มการทดสอบที่มีความน่าเชื่อถือ และกระบวนการประเมินทางวิศวกรรมที่ทำซ้ำได้อย่างแม่นยำ",
          expertise: [
            "Nondestructive testing",
            "Metrology",
            "Jig and fixture design",
            "Engineering materials"
          ],
          role_in_project: "มีส่วนร่วมในการกำหนดระเบียบวิธี NDT, การออกแบบระบบการวัด, การพัฒนา Jig & Fixture และการวางกระบวนการทดสอบที่แม่นยำและสามารถทำซ้ำได้ (Repeatable testing procedures)"
        },
        {
          id: "member-2",
          order: 2,
          name: "Assoc. Prof. Dr. Bovornchok Poopat",
          name_th: "รศ.ดร. บวรโชค ผู้พัฒน์",
          initials: "BP",
          position: "Director, KMUTT Welding Research and Consulting Center",
          position_th: "ผู้อำนวยการศูนย์วิจัยและบริการวิชาการด้านการเชื่อม มจธ.",
          category: "director",
          image: "assets/images/team-2.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=14060769400",
          profile: "Assoc. Prof. Dr. Bovornchok Poopat เชี่ยวชาญเฉพาะทางด้านเทคโนโลยีการเชื่อม ความสมบูรณ์เชิงโครงสร้าง (Structural Integrity) และการวิเคราะห์ความเสียหาย (Failure Analysis) ทั้งการตรวจสอบแบบทำลายและไม่ทำลาย เพื่อประเมินความปลอดภัยของโครงสร้างรับน้ำหนัก",
          expertise: [
            "Welding technology and process control",
            "Welding design",
            "Fitness-for-service and failure analysis",
            "Welding arc physics and heat flow analysis",
            "Welding metallurgy",
            "Destructive and nondestructive evaluation"
          ],
          role_in_project: "สนับสนุนการประเมินความสมบูรณ์เชิงโครงสร้าง, การประเมินความปลอดภัย, การวิเคราะห์ความเสียหาย และการกำหนดเกณฑ์ทางวิศวกรรมสำหรับการตรวจสอบและประเมินอายุการใช้งาน (Serviceability)"
        },
        {
          id: "member-3",
          order: 3,
          name: "Assoc. Prof. Dr. Isaratat Phung-On",
          name_th: "รศ.ดร. อิศรทัต พึ่งอ้น",
          initials: "IP",
          position: "Director, Maintenance Technology Center, KMUTT",
          position_th: "ผู้อำนวยการศูนย์เทคโนโลยีการซ่อมบำรุงรักษา (MTC) มจธ.",
          category: "director",
          image: "assets/images/team-3.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=55324593700",
          profile: "Assoc. Prof. Dr. Isaratat Phung-On เป็นผู้เชี่ยวชาญอาวุโสด้านโลหะวิทยาการเชื่อมและพฤติกรรมของวัสดุโครงสร้าง เชี่ยวชาญการตรวจวิเคราะห์กลไกการเสื่อมสภาพของวัสดุ กลไกการเกิดความเสียหาย และการประเมินอายุการใช้งานในชิ้นส่วนและโครงสร้างอุตสาหกรรม",
          expertise: [
            "Welding metallurgy",
            "Welding engineering and process control",
            "Failure analysis and life assessment",
            "Destructive evaluation",
            "Microstructure analysis"
          ],
          role_in_project: "ให้คำแนะนำเชิงลึกด้านพฤติกรรมวัสดุ, กลไกความเสียหาย, การประเมินสภาพโครงสร้าง และการแปลผลทางวิศวกรรมของการเสื่อมสภาพในลวดสลิง (Wire Ropes) และชิ้นส่วนโครงสร้างที่เกี่ยวข้อง"
        },
        {
          id: "member-4",
          order: 4,
          name: "Dr. Somporn Peansukmanee",
          name_th: "ดร. สมพร เพียรสุขมณี",
          initials: "SP",
          position: "Lecturer, Department of Production Engineering, KMUTT",
          position_th: "อาจารย์ประจำภาควิชาวิศวกรรมการผลิต มจธ.",
          category: "researcher",
          image: "assets/images/team-4.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=57217984180",
          profile: "Dr. Somporn Peansukmanee ผสานความเชี่ยวชาญด้านวิศวกรรมการเชื่อม การวิเคราะห์คุณลักษณะของวัสดุ และการผลิตทางกลไก เพื่อแปลงแนวคิดการตรวจสอบทางทฤษฎีสู่ชิ้นงานต้นแบบและโซลูชันวิศวกรรมที่นำไปใช้งานได้จริง",
          expertise: [
            "Welding engineering",
            "Destructive and nondestructive testing",
            "Microstructure analysis",
            "Mechanical design and fabrication",
            "Rail systems"
          ],
          role_in_project: "สนับสนุนการพัฒนาต้นแบบ (Prototype Development), การทดสอบวัสดุ, งานขึ้นรูปและประกอบทางกล ตลอดจนการประเมินผลการตรวจสอบจากระบบ NDT"
        },
        {
          id: "member-5",
          order: 5,
          name: "Asst. Prof. Dr. Chettapong Janya-anurak",
          name_th: "ผศ.ดร. เชษฐพงษ์ จรรยาอนุรักษ์",
          initials: "CJ",
          position: "Lecturer, Department of Production Engineering, KMUTT",
          position_th: "อาจารย์ประจำภาควิชาวิศวกรรมการผลิต มจธ.",
          category: "researcher",
          image: "assets/images/team-5.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=56884865000",
          profile: "Asst. Prof. Dr. Chettapong Janya-anurak เชี่ยวชาญด้านแบบจำลองทางคณิตศาสตร์ การจำลองเชิงตัวเลข ระบบเมคคาทรอนิกส์ และการวิเคราะห์ข้อมูลอัจฉริยะ โดดเด่นด้านการตีความสัญญาณ การสร้างโมเดลระบบ และการประเมินความไม่แน่นอนเพื่อการตัดสินใจ",
          expertise: [
            "Simulation and mathematical modeling",
            "Artificial intelligence and machine learning",
            "Uncertainty quantification",
            "Mechatronic systems",
            "Control theory"
          ],
          role_in_project: "ร่วมพัฒนาแบบจำลองเชิงวิเคราะห์และการคำนวณสำหรับการวิเคราะห์ข้อมูลเซนเซอร์, การจำแนกความเสียหาย (Damage Classification), การเฝ้าระวัง และการตรวจระบุความเสียหายอัจฉริยะ"
        },
        {
          id: "member-6",
          order: 6,
          name: "Asst. Prof. Chalermkiat Jirarungsatian",
          name_th: "ผศ. เฉลิมเกียรติ จิรารุ่งเสถียร",
          initials: "CJ",
          position: "Researcher, Maintenance Technology Center, KMUTT",
          position_th: "นักวิจัย ศูนย์เทคโนโลยีการซ่อมบำรุงรักษา (MTC) มจธ.",
          category: "researcher",
          image: "assets/images/team-6.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=35366408700",
          profile: "Asst. Prof. Chalermkiat Jirarungsatian มีประสบการณ์ยาวนานในงานทดสอบแบบไม่ทำลายเชิงประยุกต์ เครื่องมือวัดทางอุตสาหกรรม และการพัฒนาระบบตรวจสอบภาคปฏิบัติ นำงานวิจัยสู่เครื่องมือวิศวกรรมที่พร้อมใช้งานภาคสนาม",
          expertise: [
            "Nondestructive testing and evaluation",
            "Sensors for biological applications",
            "Industrial instrumentation",
            "Mechanical design and fabrication",
            "Testing for standardization"
          ],
          role_in_project: "สนับสนุนการพัฒนาชุดทดสอบ (Test-rig), เครื่องมือวัด, การออกแบบระบบการตรวจสอบ และกระบวนการตรวจสอบความถูกต้อง เพื่อมุ่งสู่การสร้างมาตรฐานและการนำไปใช้งานจริง"
        },
        {
          id: "member-7",
          order: 7,
          name: "Asst. Prof. Dr. Cherdpong Jomdecha",
          name_th: "ผศ.ดร. เชิดพงษ์ จอมเดชา",
          initials: "CJ",
          position: "Researcher, Maintenance Technology Center, KMUTT",
          position_th: "นักวิจัย ศูนย์เทคโนโลยีการซ่อมบำรุงรักษา (MTC) มจธ.",
          category: "researcher",
          image: "assets/images/team-7.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=6505661203",
          profile: "Asst. Prof. Dr. Cherdpong Jomdecha เชี่ยวชาญโดยตรงด้านเทคโนโลยีการทดสอบแบบไม่ทำลาย เทคโนโลยีเซนเซอร์ การประมวลผลสัญญาณ และการจำลองเชิงตัวเลข มีผลงานโดดเด่นด้านการตรวจสอบลวดสลิงและระบบวินิจฉัยด้วยการรั่วไหลของฟลักซ์แม่เหล็ก (MFL)",
          expertise: [
            "Nondestructive testing and evaluation",
            "Numerical modeling and simulation",
            "Sensor and signal processing",
            "Industrial instrumentation",
            "Welding and material processes"
          ],
          role_in_project: "มีบทบาทสำคัญหลักในการพัฒนาเทคโนโลยี Magnetic Flux Leakage / Magnetic Rope Testing (MFL/MRT) ครอบคลุมการออกแบบระบบเซนเซอร์, การประมวลผลสัญญาณ, การจำแนกลักษณะรอยตำหนิ และการจำลองสนามแม่เหล็ก"
        },
        {
          id: "member-8",
          order: 8,
          name: "Mr. Nico Brienza",
          name_th: "นาย นิโค บรีเอนซา (Mr. Nico Brienza)",
          initials: "NB",
          position: "Assistant Researcher, Maintenance Technology Center, KMUTT",
          position_th: "ผู้ช่วยนักวิจัย ศูนย์เทคโนโลยีการซ่อมบำรุงรักษา (MTC) มจธ.",
          category: "assistant",
          image: "assets/images/team-8.png",
          scopus: null,
          profile: "Mr. Nico Brienza สำเร็จการศึกษาด้านวิศวกรรมเมคคาทรอนิกส์และการบูรณาการระบบ สนับสนุนการพัฒนาแพลตฟอร์มการตรวจสอบแบบบูรณาการ ผ่านการเชื่อมต่อฮาร์ดแวร์-ซอฟต์แวร์และการนำระบบไปปฏิบัติการจริง",
          expertise: [
            "Nondestructive testing and evaluation",
            "Sensor and signal processing",
            "System integration",
            "Mechatronics design",
            "Numerical modeling and simulation"
          ],
          role_in_project: "สนับสนุนการรวมระบบต้นแบบ (Prototype Integration), การเชื่อมต่อเซนเซอร์-ฮาร์ดแวร์-ซอฟต์แวร์, การบันทึกข้อมูล (Data Acquisition) และการพัฒนาระบบตรวจสอบเมคคาทรอนิกส์พร้อมใช้งานภาคสนาม"
        }
      ]
    },
    applications: {
      badge: "FIELD APPLICATIONS",
      title: "การประยุกต์ใช้ในภาคอุตสาหกรรม",
      subtitle: "เทคโนโลยี NDT&E ของ มจธ. รองรับอุตสาหกรรมยุทธศาสตร์หลักของประเทศ",
      sectors: [
        {
          title: "ระบบรางและการขนส่ง",
          desc: "ตรวจสอบรางรถไฟ โครงสร้างทางวิ่ง ล้อ และเพลา เพื่อความปลอดภัยสูงสุดในการเดินทาง",
          icon: "train"
        },
        {
          title: "อุตสาหกรรมการผลิต & เครื่องจักร",
          desc: "ตรวจสอบรอยเชื่อม ท่อแรงดัน ชิ้นงานหล่อ และการเฝ้าระวังการสั่นสะเทือนของเครื่องจักรหลัก",
          icon: "factory"
        },
        {
          title: "พลังงาน ปิโตรเคมี & ท่อส่ง",
          desc: "เฝ้าระวังการกัดกร่อน การรั่วไหล และความสมบูรณ์ของถังบรรจุสารเคมีและท่อส่งใต้ดิน",
          icon: "flame"
        },
        {
          title: "อากาศยานและการบิน",
          desc: "ตรวจสอบรอยร้าวขนาดเล็กระดับไมครอนในโครงสร้างปีก ลำตัว และวัสดุคอมโพสิตขั้นสูง",
          icon: "plane"
        }
      ]
    },
    services: {
      badge: "OUR SERVICES",
      title: "บริการและความร่วมมือ",
      subtitle: "ศูนย์ MTC มจธ. พร้อมร่วมงานกับภาครัฐ เอกชน และนักวิจัยทั่วโลก",
      list: [
        {
          title: "การตรวจวัดและทดสอบความสมบูรณ์เชิงโครงสร้าง",
          desc: "บริการตรวจวัดนอกสถานที่ด้วยทีมผู้เชี่ยวชาญและเครื่องมือ NDT มาตรฐานสากล"
        },
        {
          title: "วิจัยและพัฒนาโซลูชันเฉพาะทาง (R&D)",
          desc: "ร่วมพัฒนาเซนเซอร์ ระบบอัตโนมัติ และอัลกอริทึมสำหรับปัญหาเฉพาะของภาคอุตสาหกรรม"
        },
        {
          title: "การติดตั้งระบบเฝ้าระวังระยะยาว (SHM)",
          desc: "ออกแบบและติดตั้งระบบเซนเซอร์ตรวจวัดความสมบูรณ์ของโครงสร้างแบบต่อเนื่อง 24 ชม."
        },
        {
          title: "อบรมและพัฒนาบุคลากรด้าน NDT",
          desc: "หลักสูตรฝึกอบรมเชิงปฏิบัติการด้านเทคนิคการทดสอบแบบไม่ทำลายและการวิเคราะห์สัญญาณ"
        }
      ]
    },
    contact: {
      badge: "GET IN TOUCH",
      title: "ติดต่อศูนย์เทคโนโลยีการซ่อมบำรุงรักษา (MTC)",
      address_title: "ที่ตั้งศูนย์วิจัย",
      address: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT บางมด)\n126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140",
      email_title: "อีเมลติดต่อ",
      email: "mtc-ndt@kmutt.ac.th",
      phone_title: "โทรศัพท์",
      phone: "+66 (0) 2470 8000 ต่อ 9000",
      form_name: "ชื่อ-นามสกุล",
      form_email: "อีเมล",
      form_org: "หน่วยงาน / บริษัท",
      form_topic: "หัวข้อที่ต้องการติดต่อ",
      form_message: "ข้อความ / รายละเอียดที่ต้องการสอบถาม",
      form_submit: "ส่งข้อความติดต่อ",
      form_success: "ขอบคุณที่ติดต่อศูนย์ MTC! ข้อความของคุณถูกส่งเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับโดยเร็ว"
    },
    footer: {
      copyright: "© 2026 Maintenance Technology Center (MTC) & Novel Detection Development Technology Working Group.",
      univ: "King Mongkut's University of Technology Thonburi (KMUTT)",
      rights: "สงวนลิขสิทธิ์ทุกประการ"
    }
  },

  en: {
    nav: {
      about: "About",
      strengths: "5 NDT&E Strengths",
      team: "Research Team",
      applications: "Applications",
      services: "Services & R&D",
      contact: "Contact",
      cta: "Collaborate"
    },
    hero: {
      badge: "Maintenance Technology Center | KMUTT • NDT Working Group",
      title_start: "Excellence in",
      title_highlight: "Non-Destructive Testing and Evaluation (NDT&E)",
      subtitle: "King Mongkut's University of Technology Thonburi (KMUTT) has built substantial research strengths in Non-Destructive Testing and Evaluation (NDT&E) to support modern manufacturing, structural health monitoring, and transportation infrastructure.",
      btn_explore: "Explore 5 Core Technologies",
      btn_contact: "Industry & R&D Collaboration",
      stats: [
        { label: "Core NDT Technologies", value: "5 Areas" },
        { label: "Faculty & Researchers", value: "8 Members" },
        { label: "Combined Scopus Citations", value: "1,000+", highlight: true },
        { label: "Real-Time Structural Health", value: "24/7" },
        { label: "International Standards", value: "ISO/ASNT" }
      ]
    },
    about: {
      badge: "ABOUT MTC & KMUTT",
      title: "Maintenance Technology Center at King Mongkut's University of Technology Thonburi",
      desc_1: "The Maintenance Technology Center (MTC), in collaboration with the Novel Detection Development Technology (NDT) Working Group, is dedicated to advanced research, development, and engineering implementation in non-destructive inspection and lifecycle maintenance.",
      desc_2: "Leveraging world-class faculty, researchers, and cutting-edge laboratory instruments, KMUTT engineers both high-speed motion-sensor hardware and algorithmic signal processing suites to safeguard critical national infrastructure including high-speed railways, bridges, refinery pipelines, and aerospace components.",
      pillars: [
        {
          title: "Cutting-Edge Research & Innovation",
          desc: "Pioneering novel NDT&E methodologies, advanced algorithms, and non-invasive sensors."
        },
        {
          title: "Industrial Testing & Failure Diagnostics",
          desc: "Delivering field testing, precision inspections, and root-cause damage evaluations."
        },
        {
          title: "Structural Health Monitoring (SHM)",
          desc: "Engineering automated, 24/7 real-time monitoring solutions across structure lifespans."
        }
      ]
    },
    technologies: {
      badge: "CORE CAPABILITIES",
      title: "5 Key Technological Strengths in NDT&E",
      subtitle: "Substantial research and engineering strengths developed at KMUTT",
      click_hint: "Click on any card to view detailed specifications, instruments, and applications",
      items: [
        {
          id: "acoustic-emission",
          number: "01",
          icon: "activity",
          tag: "Acoustic Emission",
          title: "Acoustic Emission Systems",
          title_th: "ระบบตรวจวัดคลื่นเสียงความถี่สูง",
          summary: "Pioneering studies on source location using acoustic emission systems to identify and classify various types of structural corrosion without damaging the materials.",
          detail_lead: "Pioneering studies on source location using acoustic emission systems to identify and classify various types of structural corrosion without damaging the materials.",
          details: [
            "Detection of transient elastic waves spontaneously generated by rapid release of strain energy during crack propagation or electrochemical corrosion.",
            "High-accuracy 2D and 3D planar and volumetric source location algorithms (Time Difference of Arrival - TDOA).",
            "Classification of corrosion mechanisms (Pitting, Stress Corrosion Cracking, Crevice Corrosion) via acoustic waveform parameter streaming.",
            "Real-time passive monitoring of pressure vessels, chemical pipelines, and bridge girders under actual operational loads."
          ],
          equipment: "Multi-channel AE Data Acquisition System, Wideband Piezoelectric Sensors, Low-Noise Pre-amplifiers",
          applications: "Oil & gas pipelines, pressurized storage spheres, reinforced concrete structures, suspension bridges"
        },
        {
          id: "ultrasonic-testing",
          number: "02",
          icon: "radio",
          tag: "UT & EM Testing",
          title: "Advanced Ultrasonic and Electromagnetic Testing",
          title_th: "การทดสอบด้วยคลื่นเสียงความถี่สูงและแม่เหล็กไฟฟ้าขั้นสูง",
          summary: "Expertise in fundamental and applied methodologies encompassing Ultrasonic Testing (UT), Eddy Current Testing, and Magnetic Particle Testing to verify material integrity.",
          detail_lead: "Expertise in fundamental and applied methodologies encompassing Ultrasonic Testing (UT), Eddy Current Testing, and Magnetic Particle Testing to verify material integrity.",
          details: [
            "Phased Array Ultrasonic Testing (PAUT) and Time of Flight Diffraction (TOFD) for volumetric weld and parent metal flaw sizing.",
            "Eddy Current Testing (ET) for high-speed, non-contact detection of surface and sub-surface fissures in conductive materials.",
            "Magnetic Particle Testing (MT) for rapid magnetic flux leakage detection on ferromagnetic components.",
            "Precision thickness gauging and high-resolution corrosion mapping across extreme operating temperatures."
          ],
          equipment: "Phased Array Flaw Detectors, Dual Matrix Transducers, Eddy Current Surface Scanners, Electromagnetic Yokes",
          applications: "Pipeline girth welds, steam/gas turbine blades, aerospace fuselage skins, automotive drive shafts"
        },
        {
          id: "high-speed-inspection",
          number: "03",
          icon: "gauge",
          tag: "High-Speed Inspection",
          title: "High-Speed Industrial Inspection",
          title_th: "การตรวจวัดความเร็วสูงสำหรับภาคอุตสาหกรรม",
          summary: "Development of high-speed inspection techniques based on motion sensors, heavily utilized for critical infrastructure such as surface railway tracks.",
          detail_lead: "Development of high-speed inspection techniques based on motion sensors, heavily utilized for critical infrastructure such as surface railway tracks.",
          details: [
            "Dynamic in-motion inspection of surface railway tracks and catenary lines at operational train velocities.",
            "Multimodal sensor fusion combining tri-axial accelerometers, high-speed laser optical profilometers, and gyro units.",
            "Early identification of rail corrugation, rolling contact fatigue (head checks), and geometric track irregularities.",
            "Predictive maintenance trigger generation to prevent catastrophic derailment risks and reduce maintenance downtimes."
          ],
          equipment: "High-G Motion Sensors, Laser Triangulation Profilers, Ruggedized Onboard Rail Acquisition Racks",
          applications: "High-speed and urban rail transit networks, intercity freight tracks, mining conveyor systems"
        },
        {
          id: "radiation-detection",
          number: "04",
          icon: "scan",
          tag: "Radiation Algorithms",
          title: "Radiation-Based Object Detection Algorithms",
          title_th: "อัลกอริทึมตรวจจับวัตถุและรอยตำหนิด้วยรังสี",
          summary: "Enhanced algorithm development tailored for radiation-based non-destructive testing to improve defect detection accuracy in complex components.",
          detail_lead: "Enhanced algorithm development tailored for radiation-based non-destructive testing to improve defect detection accuracy in complex components.",
          details: [
            "Deep learning and advanced computer vision architectures for automated defect recognition (ADR) on radioscopic image streams.",
            "Noise-reduction and edge-sharpening filters tailored for Digital Radiography (DR) and Computed Tomography (CT).",
            "High-precision 3D internal void mapping and porosity volume calculation in heavy metallic alloys.",
            "Elimination of human inspection fatigue and standardized defect evaluation according to ASME and ASTM guidelines."
          ],
          equipment: "High-Resolution DR Detectors, Industrial X-ray Sources, GPU-Accelerated Defect Classification Software",
          applications: "Precision aerospace investment castings, multilayer electronic packages, defense components, pipeline valves"
        },
        {
          id: "automation-signal-processing",
          number: "05",
          icon: "cpu",
          tag: "Automation & AI",
          title: "Automation and Signal Processing Integration",
          title_th: "การผสานระบบอัตโนมัติและการประมวลผลสัญญาณ",
          summary: "Merging traditional NDT&E hardware with advanced algorithmic signal processing for automated, highly reliable evaluations in real-time environments.",
          detail_lead: "Merging traditional NDT&E hardware with advanced algorithmic signal processing for automated, highly reliable evaluations in real-time environments.",
          details: [
            "Adaptive wavelet packet denoising and empirical mode decomposition to isolate critical defect echoes from structural noise.",
            "Automated health index scoring and classification models deployed directly at edge microcontrollers.",
            "Real-time telemetric dashboard with interactive alerting, historical trend regression, and remaining useful life (RUL) estimation.",
            "Plug-and-play IoT gateway connectivity enabling seamless integration into Industry 4.0 manufacturing lines."
          ],
          equipment: "Embedded DSP/FPGA Processing Units, Industrial Edge Gateways, Real-Time Cloud Telemetry Platform",
          applications: "Smart manufacturing facilities, offshore oil platforms, large-scale civil infrastructures, wind turbine towers"
        }
      ]
    },
    team: {
      badge: "KMUTT NDT RESEARCH TEAM",
      title: "Research Team & Technical Experts",
      subtitle: "Team Profile and Expertise — Multidisciplinary faculty and researchers driving NDT&E innovations",
      role_in_project_lbl: "Role in the Project:",
      key_expertise_lbl: "Key Expertise:",
      scopus_btn_lbl: "Scopus Profile",
      members: [
        {
          id: "member-1",
          order: 1,
          name: "Assoc. Prof. Wachira Methong",
          name_th: "รศ. วชิระ มีทอง",
          initials: "WM",
          position: "Consultant, Department of Production Engineering / MTC / KINGWELD",
          position_th: "ที่ปรึกษา, ภาควิชาวิศวกรรมการผลิต มจธ. / MTC / KINGWELD",
          category: "consultant",
          image: "assets/images/team-1.png",
          scopus: null,
          profile: "Assoc. Prof. Wachira Methong has a strong background in production engineering and practical experience in measurement systems and inspection methods. His expertise supports the development of reliable testing platforms and repeatable engineering evaluation procedures.",
          expertise: [
            "Nondestructive testing",
            "Metrology",
            "Jig and fixture design",
            "Engineering materials"
          ],
          role_in_project: "In this project, he contributes to NDT methodology, measurement system design, fixture development, and the establishment of accurate and repeatable testing procedures."
        },
        {
          id: "member-2",
          order: 2,
          name: "Assoc. Prof. Dr. Bovornchok Poopat",
          name_th: "รศ.ดร. บวรโชค ผู้พัฒน์",
          initials: "BP",
          position: "Director, KMUTT Welding Research and Consulting Center",
          position_th: "ผู้อำนวยการศูนย์วิจัยและบริการวิชาการด้านการเชื่อม มจธ.",
          category: "director",
          image: "assets/images/team-2.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=14060769400",
          profile: "Assoc. Prof. Dr. Bovornchok Poopat specializes in welding technology, structural integrity, and failure analysis. His work spans both destructive and nondestructive evaluation, with a focus on engineering assessment and safety performance of welded and load-bearing systems.",
          expertise: [
            "Welding technology and process control",
            "Welding design",
            "Fitness-for-service and failure analysis",
            "Welding arc physics and heat flow analysis",
            "Welding metallurgy",
            "Destructive and nondestructive evaluation"
          ],
          role_in_project: "In this project, he supports structural integrity assessment, safety evaluation, failure analysis, and the establishment of engineering criteria for inspection and serviceability."
        },
        {
          id: "member-3",
          order: 3,
          name: "Assoc. Prof. Dr. Isaratat Phung-On",
          name_th: "รศ.ดร. อิศรทัต พึ่งอ้น",
          initials: "IP",
          position: "Director, Maintenance Technology Center, KMUTT",
          position_th: "ผู้อำนวยการศูนย์เทคโนโลยีการซ่อมบำรุงรักษา (MTC) มจธ.",
          category: "director",
          image: "assets/images/team-3.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=55324593700",
          profile: "Assoc. Prof. Dr. Isaratat Phung-On is a senior expert in welding metallurgy and structural material behavior. His academic and research background supports advanced investigation of material degradation, failure mechanisms, and service-life assessment in industrial components and structures.",
          expertise: [
            "Welding metallurgy",
            "Welding engineering and process control",
            "Failure analysis and life assessment",
            "Destructive evaluation",
            "Microstructure analysis"
          ],
          role_in_project: "In this project, he provides guidance on material behavior, damage mechanisms, structural condition assessment, and the engineering interpretation of degradation in wire ropes and related structural components."
        },
        {
          id: "member-4",
          order: 4,
          name: "Dr. Somporn Peansukmanee",
          name_th: "ดร. สมพร เพียรสุขมณี",
          initials: "SP",
          position: "Lecturer, Department of Production Engineering, KMUTT",
          position_th: "อาจารย์ประจำภาควิชาวิศวกรรมการผลิต มจธ.",
          category: "researcher",
          image: "assets/images/team-4.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=57217984180",
          profile: "Dr. Somporn Peansukmanee combines expertise in welding engineering, materials characterization, and mechanical fabrication. His multidisciplinary background is valuable for translating inspection concepts into workable prototypes and practical engineering solutions.",
          expertise: [
            "Welding engineering",
            "Destructive and nondestructive testing",
            "Microstructure analysis",
            "Mechanical design and fabrication",
            "Rail systems"
          ],
          role_in_project: "In this project, he supports prototype development, material testing, fabrication activities, and evaluation of inspection results from the NDT system."
        },
        {
          id: "member-5",
          order: 5,
          name: "Asst. Prof. Dr. Chettapong Janya-anurak",
          name_th: "ผศ.ดร. เชษฐพงษ์ จรรยาอนุรักษ์",
          initials: "CJ",
          position: "Lecturer, Department of Production Engineering, KMUTT",
          position_th: "อาจารย์ประจำภาควิชาวิศวกรรมการผลิต มจธ.",
          category: "researcher",
          image: "assets/images/team-5.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=56884865000",
          profile: "Asst. Prof. Dr. Chettapong Janya-anurak has expertise in mathematical modeling, simulation, mechatronic systems, and intelligent data analysis. His background is especially relevant to signal interpretation, system modeling, and uncertainty-aware decision support.",
          expertise: [
            "Simulation and mathematical modeling",
            "Artificial intelligence and machine learning",
            "Uncertainty quantification",
            "Mechatronic systems",
            "Control theory"
          ],
          role_in_project: "In this project, he contributes to analytical and computational models for sensor data analysis, damage classification, condition monitoring, and intelligent damage identification."
        },
        {
          id: "member-6",
          order: 6,
          name: "Asst. Prof. Chalermkiat Jirarungsatian",
          name_th: "ผศ. เฉลิมเกียรติ จิรารุ่งเสถียร",
          initials: "CJ",
          position: "Researcher, Maintenance Technology Center, KMUTT",
          position_th: "นักวิจัย ศูนย์เทคโนโลยีการซ่อมบำรุงรักษา (MTC) มจธ.",
          category: "researcher",
          image: "assets/images/team-6.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=35366408700",
          profile: "Asst. Prof. Chalermkiat Jirarungsatian has extensive experience in applied nondestructive testing, industrial instrumentation, and practical system development for testing applications. His work supports the transformation of research concepts into deployable engineering tools.",
          expertise: [
            "Nondestructive testing and evaluation",
            "Sensors for biological applications",
            "Industrial instrumentation",
            "Mechanical design and fabrication",
            "Testing for standardization"
          ],
          role_in_project: "In this project, he supports test-rig development, instrumentation, inspection-system design, and validation procedures to strengthen future standardization and field implementation."
        },
        {
          id: "member-7",
          order: 7,
          name: "Asst. Prof. Dr. Cherdpong Jomdecha",
          name_th: "ผศ.ดร. เชิดพงษ์ จอมเดชา",
          initials: "CJ",
          position: "Researcher, Maintenance Technology Center, KMUTT",
          position_th: "นักวิจัย ศูนย์เทคโนโลยีการซ่อมบำรุงรักษา (MTC) มจธ.",
          category: "researcher",
          image: "assets/images/team-7.png",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=6505661203",
          profile: "Asst. Prof. Dr. Cherdpong Jomdecha has direct expertise in nondestructive testing and evaluation, sensor technologies, signal processing, and numerical simulation. His specialization aligns closely with wire rope inspection and magnetic-flux-based diagnostic systems.",
          expertise: [
            "Nondestructive testing and evaluation",
            "Numerical modeling and simulation",
            "Sensor and signal processing",
            "Industrial instrumentation",
            "Welding and material processes"
          ],
          role_in_project: "In this project, he plays a central role in the development of Magnetic Flux Leakage / Magnetic Rope Testing technology, including sensor-system design, signal processing, defect characterization, and magnetic-field simulation."
        },
        {
          id: "member-8",
          order: 8,
          name: "Mr. Nico Brienza",
          name_th: "นาย นิโค บรีเอนซา (Mr. Nico Brienza)",
          initials: "NB",
          position: "Assistant Researcher, Maintenance Technology Center, KMUTT",
          position_th: "ผู้ช่วยนักวิจัย ศูนย์เทคโนโลยีการซ่อมบำรุงรักษา (MTC) มจธ.",
          category: "assistant",
          image: "assets/images/team-8.png",
          scopus: null,
          profile: "Mr. Nico Brienza has a background in mechatronics engineering and system integration. He supports the practical development of integrated inspection platforms through hands-on work in hardware-software interfacing and system implementation.",
          expertise: [
            "Nondestructive testing and evaluation",
            "Sensor and signal processing",
            "System integration",
            "Mechatronics design",
            "Numerical modeling and simulation"
          ],
          role_in_project: "In this project, he supports prototype integration, sensor-hardware-software interfacing, data acquisition, and the development of field-ready mechatronic inspection systems."
        }
      ]
    },
    applications: {
      badge: "FIELD APPLICATIONS",
      title: "Strategic Industrial Sectors",
      subtitle: "KMUTT's NDT&E solutions support crucial domestic and international industries",
      sectors: [
        {
          title: "Railway & Transportation",
          desc: "Inspecting tracks, wheels, bogies, and civil transit structures for maximum public travel safety.",
          icon: "train"
        },
        {
          title: "Manufacturing & Heavy Machinery",
          desc: "Validating critical welded assemblies, pressure components, and rotating equipment health.",
          icon: "factory"
        },
        {
          title: "Energy, Petrochemical & Pipelines",
          desc: "Monitoring internal corrosion, hydrogen induced cracking, and pipeline integrity under harsh service.",
          icon: "flame"
        },
        {
          title: "Aerospace & Marine",
          desc: "Detecting micro-cracks and composite delamination in aircraft structures and ship hulls.",
          icon: "plane"
        }
      ]
    },
    services: {
      badge: "OUR SERVICES",
      title: "Capabilities & Industrial Services",
      subtitle: "MTC KMUTT is ready to partner with industries, research institutes, and engineering leaders",
      list: [
        {
          title: "On-Site Structural NDT Inspection",
          desc: "Field non-destructive testing and structural diagnostics conducted by certified NDT specialists."
        },
        {
          title: "Custom R&D & Novel Sensor Development",
          desc: "Tailored engineering research to develop custom sensors, testing rigs, and signal algorithms."
        },
        {
          title: "Structural Health Monitoring (SHM) Systems",
          desc: "Design and turnkey installation of continuous 24/7 sensor networks with telemetric alerting."
        },
        {
          title: "Specialized Training & Professional Workshops",
          desc: "Advanced training programs on NDT methodologies, signal processing, and international standards."
        }
      ]
    },
    contact: {
      badge: "GET IN TOUCH",
      title: "Contact Maintenance Technology Center (MTC)",
      address_title: "Research Center Location",
      address: "King Mongkut's University of Technology Thonburi (KMUTT Bangmod)\n126 Pracha Uthit Rd, Bang Mot, Thung Khru, Bangkok 10140, Thailand",
      email_title: "Email Address",
      email: "mtc-ndt@kmutt.ac.th",
      phone_title: "Telephone",
      phone: "+66 (0) 2470 8000 ext. 9000",
      form_name: "Full Name",
      form_email: "Email Address",
      form_org: "Company / Organization",
      form_topic: "Inquiry Topic",
      form_message: "Message / Specific Requirements",
      form_submit: "Send Message",
      form_success: "Thank you for reaching out to MTC! Your message has been received. Our team will contact you shortly."
    },
    footer: {
      copyright: "© 2026 Maintenance Technology Center (MTC) & Novel Detection Development Technology Working Group.",
      univ: "King Mongkut's University of Technology Thonburi (KMUTT)",
      rights: "All Rights Reserved."
    }
  }
};
