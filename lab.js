/* 수의전염병학2 실습 기말 — 문항 데이터
   근거: 2026 강의안(정답근거) + 2025 시험표시PDF(보라출제·빨강정답) + 2024 마킹 + 복기.jpg
   족보답 신뢰0 → 강의안 기준 독립판정. 강의안↔과학 충돌은 ⚠️ flag.
   part: 핵산구조 RNA추출 RTqPCR PCR 전기영동 BLAST계통 PRRS 부검유제
   type: ox(answer[1]=O,[2]=X) single multi short calc essay summary
*/
const LABLAB = [

/* ===================== 핵산구조 ===================== */
{id:1, part:'핵산구조', topic:'Chaotropic salt·고분자 구조', origin:'summary', type:'summary',
 explain:`## 핵산은 왜 silica에 붙는가 — chaotropic salt의 원리\n\n**Chaotropic salt(카오트로픽 염)**: 수용액 안의 물 분자가 만드는 **수소결합 그물망 구조를 깨뜨리는** 화합물(예: guanidine, NaI). RNA/DNA 추출 kit의 **Lysis·Binding buffer**에 들어간다.\n\n**평상시(물 속)**: 핵산은 음전하 인산골격 때문에 물 분자가 둘러싼 **수화막(hydration shell)**에 싸여 용해 상태로 존재한다 → silica에 안 붙음.\n\n**Chaotropic salt 첨가 시**: 물의 수소결합 정렬이 무너지고 수화막이 벗겨져 **소수성(hydrophobic) 환경**이 조성된다 → 핵산이 silica·glass 표면에 쉽게 흡착.\n\n**수소결합이 관여하는 곳**\n| 분자 | 수소결합이 만드는 구조 |\n|---|---|\n| DNA·RNA | 이중나선의 염기쌍(A=T, G≡C) |\n| 단백질 | **2차 구조**(α-helix, β-sheet)와 그 위의 3차·4차 |\n\n⚠️ 시험 함정: "수소결합이 단백질의 **2차 구조**에 영향" 자체는 맞지만, 출제자는 "**단백질의 고차(3차) 구조**"를 "2차"로 바꾸거나 "chaotropic"을 "tropic"으로 오타 내는 식으로 틀린 문장을 만든다.\n\n**한 줄 요약**: chaotropic salt가 핵산의 수화막을 깨 → 소수성 환경 → silica 흡착. 수소결합은 핵산 염기쌍·단백질 2차구조 형성에 핵심.`,
 exam:'', freq:1},

{id:2, part:'핵산구조', topic:'Chaotropic salt·고분자 구조', origin:'jokbo', type:'essay',
 q:`다음은 chaotropic salt를 설명하는 글이다. **틀린 부분 3곳**을 찾아 옳게 고치시오. (2025 기말 ⑯)\n\n"① 수소결합은 DNA, RNA, 단백질과 같은 고분자의 **2차 구조** 형성과 분자의 수용성에 큰 영향을 미친다. ② 일반 조건에서 핵산은 수화막에 둘러싸여 **소수성**을 유지한다. ③ **Tropic salt**를 넣으면 수화막 구조가 파괴되어 친수성 환경이 되고, 핵산이 silica에 결합한다."`,
 choices:[], answer:[],
 explain:`**모범답안 — 틀린 3곳**\n\n① "단백질의 **2차 구조**" → 단백질에서 수소결합이 핵심인 것은 맞으나, 출제 글의 의도상 **단백질의 고차(3차) 구조**까지 포함해야 정확. (단백질 입체구조 = 2차 α-helix/β-sheet + 3차·4차)\n\n② "핵산은 수화막에 둘러싸여 **소수성**을 유지" → **수용성(친수성)**을 유지가 맞다. 인산골격이 음전하라 물에 잘 녹음.\n\n③ "**Tropic salt**" → **Chaotropic salt** (오타). 그리고 "**친수성 환경**" → **소수성 환경**이 조성되어야 silica에 흡착된다.\n\n**핵심**: chaotropic salt = 수화막을 깨 소수성 환경을 만들어 핵산을 silica에 붙임. (강의안 'Chaotropic Salt' 슬라이드 근거)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

/* ===================== RNA추출 ===================== */
{id:3, part:'RNA추출', topic:'Spin column 원리·buffer', origin:'summary', type:'summary',
 explain:`## Spin column 핵산 추출 — 흡착·세척·용출\n\n**정의**: molecular biology에서 spin column method는 **silica membrane에 핵산을 흡착시켜 정제·분리**하는 기술. 4단계 흐름:\n\n**Lyse(용해) → Bind(흡착) → Wash(세척) → Elute(용출)**\n\n**핵심 조건(시험 단골 ↑/↓)**\n| 단계 | salt | 원리 |\n|---|---|---|\n| Bind(흡착) | **High salt↑**, low temp↓ | chaotropic salt의 Na⁺가 **cation bridge**(양이온 다리)로 silica(-O⁻)와 핵산 인산(-O⁻P)을 연결 |\n| Wash(세척) | — | **80% EtOH**로 단백질·염 등 불순물 제거 (핵산은 붙은 채 유지) |\n| Elute(용출) | **Low salt↓** (주로 DW) | cation bridge 해제 → 핵산이 물에 다시 녹아 떨어짐 |\n\n**Buffer 3종 역할**\n- **Binding buffer**: high salt → DNA–silica hybrid 형성 유도\n- **Washing buffer**: 80% EtOH(수화막 제거)·Tris-HCl(pH 완충, DNA 변성 방지)·NaCl(흡착 해리 방지)\n- **Elution buffer**: low salt(DW) → 흡착 해제·용출\n\n**공회전(빈 원심)**: 마지막 wash 뒤 buffer 없이 한 번 더 원심 → **잔류 EtOH로 membrane 건조**. 이유: **잔류 ethanol이 하류 반응(PCR)을 방해**하기 때문.\n\n**한 줄 요약**: 높은 염↑·낮은 온도에서 붙이고(cation bridge), EtOH로 씻고, 낮은 염↓ 물로 떼어낸다. 공회전=ethanol 말리기.`,
 exam:'', freq:2},

{id:4, part:'RNA추출', topic:'Spin column 원리·buffer', origin:'jokbo', type:'short',
 q:`Spin column 원리 글의 빈칸에 **↑(높게) 또는 ↓(낮게)**를 채우시오. (2025 기말 ⑮)\n\n"핵산은 [ A ] salt, [ B ] temp 조건에서 silica·glass에 흡착된다. EtOH로 wash 후 [ C ] salt 조건을 만들어 흡착된 핵산을 용출 분리한다."`,
 choices:[], answer:[],
 explain:`**정답: A=↑(high), B=↓(low), C=↓(low)**\n\n- **흡착(bind)**: 염 **높게↑**, 온도 **낮게↓** → Na⁺ cation bridge로 silica에 결합\n- **용출(elute)**: 염 **낮게↓**(주로 DW) → 결합 해제, 핵산이 물에 녹아 떨어짐\n\n강의안 'Spin column method' 슬라이드 문장 그대로 출제됨. 빈칸 □ 위치에 ↑/↓ 기재.`,
 exam:'2025-기말', hl2025:true, freq:2, source:'jokbo'},

{id:5, part:'RNA추출', topic:'추출 protocol·공회전', origin:'jokbo', type:'essay',
 q:`RNA extraction protocol에서 ① **공회전(빈 원심)을 하는 단계는 언제이며 그 이유**는? ② **핵산(DNA)이 column membrane에 흡착되는 단계**는 어디인가? (2025 기말 ⑫/⑥)`,
 choices:[], answer:[],
 explain:`**① 공회전 단계와 이유**\n- 단계: **마지막 Washing buffer 제거 후**, buffer를 넣지 않고 13,000 rpm으로 한 번 더 원심하는 단계.\n- 이유: membrane에 남은 **잔류 ethanol(EtOH)이 downstream 반응(PCR/RT-PCR)을 방해**하므로, 공회전으로 **membrane을 완전히 건조**시켜 ethanol을 제거하기 위함.\n\n**② 핵산이 흡착되는 단계**\n- **Binding buffer(300 µl) 첨가 후 lysate(750 µl)를 column에 load → 13,000 rpm 1분 원심**하는 단계.\n- 이때 high salt 조건에서 cation bridge가 형성되어 핵산이 silica membrane에 붙는다.\n\n**protocol 순서 참고**: 시료 150 µl → Lysis 300 µl → vortex 15초 → RT 10분 → **Binding 300 µl** → spin column 장착 → lysate 750 µl load·원심(=흡착) → Wash A 500 µl → Wash B 500 µl → **공회전(건조)** → Elution 40 µl → 용출. (강의안 'RNA Extraction Protocol' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:2, source:'jokbo'},

{id:6, part:'RNA추출', topic:'추출 protocol·공회전', origin:'jokbo', type:'multi',
 q:`Silica membrane에 핵산이 **흡착(cation bridge 형성)되어 결합을 유지하는** 단계를 protocol 순서(1~7) 중 **모두 고르시오**. (2025 기말, 보기 제공형 변형)\n\n[1] 시료에 Lysis buffer 첨가 [2] Binding buffer 첨가 [3] lysate를 column에 load·원심 [4] Washing buffer A·B로 세척 [5] 공회전(건조) [6] Elution buffer 첨가 [7] 용출액 원심 회수`,
 choices:['[2] Binding buffer 첨가','[3] lysate load·원심','[4] Washing(세척)','[5] 공회전','[6] Elution buffer 첨가'],
 answer:[1,2,3,4],
 explain:`**정답: [2][3][4][5] (Binding~공회전까지 흡착 유지)**\n\n- **[2] Binding buffer**: high salt 조성 → cation bridge **형성 시작**\n- **[3] load·원심**: 핵산이 silica에 **흡착**\n- **[4] Washing**: 흡착 **유지**한 채 불순물만 제거(EtOH는 핵산을 떼지 않음)\n- **[5] 공회전**: 흡착 **유지**, ethanol만 건조\n- **[6] Elution(low salt)**: 여기서 **cation bridge 해제 → 핵산이 떨어짐**(흡착 끝)\n\n즉 흡착은 **Binding(2)부터 시작해 Elution(6) 직전(5)까지 유지**된다. 실제 시험은 "3~8단계" 식 보기로 출제. (강의안 protocol 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

/* ===================== RTqPCR ===================== */
{id:7, part:'RTqPCR', topic:'RT-qPCR 용어·1·2-step', origin:'summary', type:'summary',
 explain:`## PCR · RT-PCR · qPCR · RT-qPCR 구분\n\n| 용어 | template | 핵심 |\n|---|---|---|\n| **PCR** | DNA | 중합효소로 목표 DNA 증폭 |\n| **RT-PCR** | RNA | 역전사효소로 RNA→cDNA 후 증폭 |\n| **qPCR**(real-time) | DNA | 실시간 **정량** |\n| **RT-qPCR** | RNA | RNA→cDNA→실시간 정량 |\n\n**1-step vs 2-step RT-qPCR**\n| | 진행 | 장점 | 단점 |\n|---|---|---|---|\n| **1-step** | 단일 tube에서 cDNA합성+증폭 한 번에(gene-specific primer) | PCR 1회로 결과, 편리·오염↓ | **cDNA 보관 불가** → 목표 외 서열 분석 불가 |\n| **2-step** | Step1 oligo dT/random primer로 RNA 전체→cDNA, Step2 gene-specific로 목표 증폭 | **cDNA 보관 가능** → 다른 서열도 증폭 | 시간 오래, 단계 많음 |\n\n⚠️ 함정: "1-step은 cDNA 보관이 가능하다" → **틀림(X)**. 보관 가능한 쪽은 **2-step**.\n\n**qPCR 정량 용어**\n- **Baseline**: 초기 3~15 cycle의 noise\n- **Threshold**: baseline 표준편차의 ~10배 높은 유의 신호선\n- **Ct(threshold cycle)**: 증폭곡선이 threshold와 만나는 cycle. **Ct 1 차이 = template 2배 차이**, **Ct 낮을수록 바이러스 많음**.\n\n**한 줄 요약**: RNA는 RT-PCR로 cDNA 만들고, 실시간 정량은 Ct로 읽는다(Ct↓=양↑). 2-step만 cDNA 보관 가능.`,
 exam:'', freq:2},

{id:8, part:'RTqPCR', topic:'RT-qPCR 용어·1·2-step', origin:'jokbo', type:'ox',
 q:`(1-step RT-qPCR) "장점은 1번의 PCR만으로 결과를 얻을 수 있어 편리하고, 단점은 cDNA를 보관할 수 없어 목표 외 염기서열 분석이 불가능하다." (2025 기말 ③)`,
 choices:['O (맞음)','X (틀림)'], answer:[1],
 explain:`**정답: O**\n\n1-step RT-qPCR의 장·단점 설명으로 둘 다 옳다.\n- 장점: 단일 tube에서 한 번에 → PCR 1회로 결과(편리, 교차오염↓)\n- 단점: cDNA를 따로 보관할 수 없어 → 나중에 다른 유전자(목표 외 서열)는 증폭 불가\n\n(강의안 'RT-qPCR 방법 1-step' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:9, part:'RTqPCR', topic:'RT-qPCR 용어·1·2-step', origin:'jokbo', type:'ox',
 q:`"**1-step** RT-qPCR은 cDNA를 보관할 수 있어 다른 염기서열도 증폭할 수 있다." (2025 기말, 2-step 함정)`,
 choices:['O (맞음)','X (틀림)'], answer:[2],
 explain:`**정답: X**\n\ncDNA를 보관할 수 있어 다른 서열도 증폭 가능한 것은 **2-step**이다. 문장이 주어를 **1-step**으로 바꿔치기 해서 틀린 선지로 만들었다.\n- 1-step: cDNA 보관 **불가**\n- 2-step: cDNA 보관 **가능**\n\n함정 포인트: 설명 내용(cDNA 보관 가능)은 맞지만 앞의 주어(1-step)가 틀림. (강의안 1·2-step 비교 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:10, part:'RTqPCR', topic:'Probe vs SYBR green', origin:'summary', type:'summary',
 explain:`## qPCR 형광 검출 — Probe(TaqMan) vs SYBR green\n\n**Probe(TaqMan) 원리**\n1. Probe는 **형광물질(fluorophore) + 소광제(quencher)**로 구성\n2. primer보다 **뒤쪽**에 위치하며 template과 **상보적** 서열\n3. 평소 quencher가 fluorophore에 붙어 **형광 억제**\n4. 중합 시 polymerase의 **5'→3' exonuclease**가 probe를 분해 → fluorophore와 quencher 분리 → **형광 발산**\n5. 증폭 산물 양에 비례해 형광 ↑\n\n**SYBR green 원리**\n- **intercalator**: 모든 **ds-DNA**에 끼어들어 형광. 증폭량에 비례해 형광 ↑\n\n**장단점 비교(서술형 단골)**\n| | 장점 | 단점 |\n|---|---|---|\n| **Probe** | template 상보서열에만 결합 → **특이적·정확**, 형광 색을 달리해 **동시 다중(multiplex) 검출** | 서열마다 별도 probe 합성 → **비용↑** |\n| **SYBR green** | 모든 ds-DNA 검출 가능, **저비용** | 모든 ds-DNA에 결합 → **비특이 결합**(primer-dimer도 검출) |\n\n**결론**: Probe는 비싸지만 특이성·재현성이 높아 정밀 정량에 유리.\n\n**한 줄 요약**: Probe=특이적·다중·비싸다(exonuclease로 형광). SYBR=싸지만 비특이(모든 dsDNA에 낌).`,
 exam:'', freq:2},

{id:11, part:'RTqPCR', topic:'Probe vs SYBR green', origin:'jokbo', type:'essay',
 q:`qPCR에서 **Probe의 원리**를 쓰고, **SYBR green과 비교하여 장단점**을 서술하시오. (2025 기말 ④·⑥, 서술형 4점)`,
 choices:[], answer:[],
 explain:`**Probe 원리**: Probe는 **형광물질(fluorophore)과 소광제(quencher)**로 구성되며 template에 상보적으로 결합. 평소 quencher가 형광을 억제하다가, polymerase의 **5'→3' exonuclease 활성**이 probe를 분해하면 fluorophore와 quencher가 분리되어 **형광을 발산**한다. 증폭량에 비례해 형광이 증가.\n\n**SYBR green 원리**: 모든 **ds-DNA에 끼어드는 intercalator**로, 증폭된 dsDNA에 결합해 형광 발산.\n\n**장단점 비교**\n- Probe 장점: 상보서열에만 붙어 **특이적·정확**, 형광색을 달리해 **동시 다중 검출(multiplex)** 가능. 단점: 서열마다 probe를 따로 합성해 **비용이 큼**.\n- SYBR 장점: 모든 dsDNA 검출 가능·**저비용**. 단점: 비특이 결합(primer-dimer 등도 검출).\n\n**결론**: Probe가 비용은 높지만 특이성·재현성이 우수해 정밀 정량에 적합. (강의안 'Probe', 'SYBR-green', '형광물질 비교' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:2, source:'jokbo'},

{id:12, part:'RTqPCR', topic:'Probe vs SYBR green', origin:'jokbo', type:'ox',
 q:`"SYBR green은 증폭된 DNA에 삽입되어도 PCR을 저해하지 않는다." (2025 기말 ⑤, OX)`,
 choices:['O (맞음)','X (틀림)'], answer:[2],
 flag:true, flagReason:'강의안 슬라이드엔 "저해하지 않음(O)"으로 적혀 있으나 시험 정답은 X(저해함). 실제로 고농도 SYBR green은 PCR을 저해할 수 있어 시험은 과학사실 기준 채점.',
 explain:`**시험 정답: X (저해한다)** — ⚠️ 강의안과 충돌하는 문항\n\n- **강의안 슬라이드 문장**: "증폭된 DNA에 삽입되어도 PCR을 저해하지 않음" → 글자 그대로면 **O**.\n- **시험(선배) 정답**: **X** — 즉 "저해한다"가 옳다고 채점.\n- **과학 사실**: SYBR green은 **고농도에서 PCR을 저해**할 수 있다(모든 ds-DNA에 과량 결합 시 중합 방해). 그래서 최적 농도로 희석해 사용한다. 시험은 이 과학사실 기준으로 "저해하지 않음=틀림(X)"으로 본 것.\n\n**대비 전략**: 강의안 문장(저해 안 함)과 시험 정답(저해함)이 다르다. 시험은 **X**로 채점했으니 시험 기준 X로 외우되, 강의안 원문은 "저해하지 않음"임을 알아둘 것. 헷갈리면 ⚠️ 표시 문항.`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:13, part:'RTqPCR', topic:'Probe vs SYBR green', origin:'jokbo', type:'ox',
 q:`"Probe 방식은 서로 다른 형광물질을 이용해 한 반응에서 동시에 서로 다른 염기서열을 증폭·검출할 수 있다." (2025 기말 ②, OX)`,
 choices:['O (맞음)','X (틀림)'], answer:[1],
 explain:`**정답: O**\n\nProbe(TaqMan) 방식은 형광색이 다른 probe를 여러 개 써서 **multiplex(다중) 검출**이 가능하다. 이것이 모든 ds-DNA에 똑같이 끼어드는 SYBR green 대비 Probe의 장점.\n\n(강의안 '형광물질 비교' 슬라이드 — Probe 장점)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:14, part:'RTqPCR', topic:'qPCR 정량 용어(Ct)', origin:'jokbo', type:'multi',
 q:`다음 qPCR 용어 설명 중 **옳은 것을 모두 고르시오**. (2025 기말 ③④⑤ — 정답 모두 O)`,
 choices:[
  'Baseline: PCR 초기(보통 3~15 cycle)에 나타나는 noise 신호',
  'Threshold: baseline 표준편차보다 약 10배 높은 신호로 설정한 유의 기준선',
  'Ct: 증폭곡선이 threshold와 만나는 cycle 수로, template 양 측정에 사용',
  'Ct가 1 cycle 차이 나면 template 양은 약 2배 차이',
  'Ct가 높을수록(늦게 올라올수록) 시료 내 바이러스 양이 많다'],
 answer:[1,2,3,4],
 explain:`**정답: ①②③④ (⑤만 틀림)**\n\n①②③④는 강의안 'qPCR 용어' 슬라이드 그대로 옳다 — 실제 시험에서 ③④⑤(Baseline/Threshold/Ct) 세 OX 문장 모두 **O**로 채점됨.\n\n⑤ ✗: **Ct가 낮을수록**(곡선이 빨리 올라올수록) template(바이러스)가 **많다**. "높을수록 많다"는 반대로 틀림. (지수증폭이라 양이 많으면 일찍 threshold 도달)\n\n핵심: **Ct↓ = 바이러스↑**, Ct 1 차이 = 2배.`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:15, part:'RTqPCR', topic:'RT-qPCR mixture 재료', origin:'jokbo', type:'multi',
 q:`RT-(q)PCR 반응 mixture에 **직접 넣는 재료를 모두 고르시오**. (2025 기말 ⑦ — 14선지 중 다수 정답형)`,
 choices:[
  'Template RNA',
  'Forward primer',
  'Reverse primer',
  'DNA polymerase (Taq)',
  'Reverse transcriptase (RTase)',
  'dNTP (dATP·dCTP·dGTP·dTTP)',
  'Reaction buffer',
  'Ethyl alcohol(에탄올)',
  'Binding buffer'],
 answer:[1,2,3,4,5,6,7],
 explain:`**정답: ①~⑦ (Template RNA, F/R primer, Taq, RTase, dNTP, buffer)**\n\nRT-PCR mixture 구성(강의안): **Template RNA + Forward/Reverse primer + DNA polymerase(Taq) + Reverse transcriptase + dNTP + reaction buffer**. 실제 kit는 buffer·RTase·dNTP·Taq가 합쳐진 **master mix(PrimeScript RT Master Mix)** 형태로 들어가기도 한다.\n\n**오답(넣지 않음)**\n- ⑧ Ethyl alcohol: RNA **추출(wash)** 시약이지 PCR mixture 성분 아님 ✗\n- ⑨ Binding buffer: spin column **추출** 시약 ✗\n\n함정: 추출 단계 시약(EtOH·binding/washing/elution buffer)을 PCR 재료에 섞어 끼워 넣는다. dNTP를 'dNDP/dTTP'로 오타 낸 선지도 등장. (강의안 'RT-PCR materials'·'mixture' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

/* ===================== PCR ===================== */
{id:16, part:'PCR', topic:'PCR thermocycle 3단계', origin:'summary', type:'summary',
 explain:`## PCR thermocycle — 변성·결합·신장 (온도 암기)\n\n| 단계 | 이름 | 온도 | 시간 | 하는 일 |\n|---|---|---|---|---|\n| 1 | **Denaturation(변성)** | **94~98℃** | 20~30초 | ds-DNA를 단일가닥으로 분리 |\n| 2 | **Annealing(결합)** | **50~65℃** (Tm보다 2~3℃ 낮게) | 20~40초 | primer가 template에 상보 결합 |\n| 3 | **Extension(신장)** | **72~78℃** (Taq 최적활성) | 길이 비례 | **DNA polymerase가 dNTP를 붙여 합성** |\n\n그래프로 보면: 출발 ~25℃ → **②94℃(변성)** → **③50℃대(결합)** → **④72℃(신장)** 의 톱니파가 30~40 cycle 반복.\n\n**RT-PCR 앞단계**: RNA를 다루므로 thermocycle **전에** Reverse transcription(역전사) 단계가 있다 — **40~60℃, 20~30분**, oligo dT primer가 RNA에 붙어 cDNA 합성.\n\n**전체 RT-PCR 조건표 예시**: RT 55℃/30분 → pre-denat 94℃/2분 → [94℃ 15초 / 52℃ 30초 / 68℃ 1분] ×40 → final 68℃/5분.\n\n**한 줄 요약**: 94(변성)–50대(결합)–72(신장). **DNA 합성=신장(72℃)=DNA polymerase**. RNA면 앞에 역전사(40~60℃) 추가.`,
 exam:'', freq:2},

{id:17, part:'PCR', topic:'PCR thermocycle 3단계', origin:'jokbo', type:'single',
 q:`PCR thermocycle 온도 그래프에서 ①시작(~25℃) ②94℃ ③50℃ ④72℃ 구간이 표시되어 있다. **DNA polymerase가 DNA를 합성(신장)하는 단계**는? (2025 기말 ⑧/①)`,
 choices:['① 시작(~25℃)','② 94℃','③ 50℃','④ 72℃','①~④ 모든 단계'],
 answer:[4],
 explain:`**정답: ④ 72℃ (Extension·신장)**\n\n- ② 94℃ = Denaturation(변성): ds-DNA 분리\n- ③ 50℃대 = Annealing(결합): primer 결합\n- **④ 72℃ = Extension(신장): Taq DNA polymerase가 dNTP를 붙여 새 가닥 합성** ← DNA 합성이 일어나는 단계\n\n72℃가 Taq polymerase의 최적 활성 온도. 그래프의 중간 plateau(72℃)가 정답. (강의안 'PCR thermocycle' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:18, part:'PCR', topic:'PCR thermocycle 3단계', origin:'jokbo', type:'short',
 q:`PCR thermocycle에서 **50℃ 부근의 단계 이름**과, 이 온도에서 일어나는 일(=왜 이 온도인지)을 쓰시오. (2025 기말 ① 변형, 1점)`,
 choices:[], answer:[],
 explain:`**정답: Annealing(결합/어닐링) 단계**\n\n- 50~65℃에서 **primer가 template DNA에 상보적으로 결합**한다.\n- 온도는 **primer–template의 Tm(melting temperature)보다 2~3℃ 낮게** 설정 — 너무 높으면 primer가 안 붙고, 너무 낮으면 비특이 결합이 생기므로.\n\n이후 72℃ extension에서 이 primer를 시발점으로 polymerase가 합성을 시작한다. (강의안 'PCR thermocycle' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:19, part:'PCR', topic:'RT-PCR 첫 단계(역전사)', origin:'jokbo', type:'short',
 q:`RT-PCR의 **첫 번째 단계 이름**과 그 단계에서 **무슨 일**이 일어나는지 쓰시오. (2025 기말 ⑨)`,
 choices:[], answer:[],
 explain:`**정답: Reverse transcription(역전사)**\n\n- RT-PCR은 **RNA**를 template로 쓰므로, PCR thermocycle 전에 먼저 RNA를 DNA로 바꿔야 한다.\n- 첫 단계 = **역전사(reverse transcription)**: **40~60℃, 20~30분** 조건에서 **reverse transcriptase(RTase)**가 oligo dT/random primer를 시발점으로 RNA를 주형 삼아 **cDNA(상보 DNA)를 합성**한다.\n- 이후 RNase H로 RNA 제거(선택) → PCR thermocycle로 증폭.\n\n⚠️ 주의: 역전사는 **실험 기법(효소 RTase 사용)**이다. PRRSV 같은 +ssRNA 바이러스가 스스로 역전사하는 것이 아니다(아래 PRRS 파트 참고). (강의안 'RT-PCR' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:20, part:'PCR', topic:'PCR primer 설계', origin:'jokbo', type:'short',
 q:`Template 가닥이 **5'-...A A G G G-3'** 일 때, 이 부위에 상보적으로 결합하는 **primer 서열을 5'→3' 방향으로** 쓰시오. (2025 기말 ⑩, 빈칸 작성형)`,
 choices:[], answer:[],
 explain:`**정답: 5'-C C C T T-3'**\n\n상보 결합 규칙(A-T, G-C)으로 template 3'쪽부터 짝지으면:\n\n\`\`\`\ntemplate  5'- A A G G G -3'\nprimer    3'- T T C C C -5'\n\`\`\`\n\nprimer를 관례대로 **5'→3' 방향**으로 다시 쓰면 → **5'-CCCTT-3'**.\n\n포인트: ① A↔T, G↔C 상보 ② 두 가닥은 **역평행(antiparallel)** ③ 답은 항상 **5'→3'**로 표기. (강의안 'PCR Primers' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:21, part:'PCR', topic:'PCR template·target gene', origin:'jokbo', type:'essay',
 q:`서로 다른 두 PCR template를 한 반응에 넣었을 때, **처음 target gene과 길이가 다른 산물이 생기는 개수와 그 이유**를 설명하시오. (그림 설명 가능, 복기 1.5점)`,
 choices:[], answer:[],
 explain:`**핵심**: primer는 두 template **모두**에 상보 부위가 있으면 결합하므로, target 외에 **다른 길이의 비특이 산물**이 생길 수 있다.\n\n- 한 쌍의 primer가 의도한 target gene(길이 A)뿐 아니라, 다른 template에서 forward·reverse가 붙는 위치가 다르면 **길이가 다른 산물**이 추가로 증폭된다.\n- 같은 primer가 두 template에 모두 결합하면 → target(원래 길이) + 비특이(다른 길이) 산물이 동시에 나옴.\n\n그래서 PCR은 **primer 특이성**과 **template 순도**가 중요하며, 전기영동에서 target band 외에 추가 band가 보이면 비특이 증폭을 의심한다.\n\n*(주의: 이 문항은 복기 기준 재구성이며, 정확한 산물 개수는 그림 조건에 따라 달라진다 — 그림의 primer 결합 위치를 보고 판단할 것.)*`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo', flag:true,
 flagReason:'복기 기반 재구성 문항 — 정확한 산물 개수는 시험지 그림의 primer 결합 위치에 따라 달라져 단정 불가. 원리(비특이 증폭) 중심으로 학습 권장.'},

/* ===================== 전기영동 ===================== */
{id:22, part:'전기영동', topic:'Agarose gel·TAE buffer', origin:'summary', type:'summary',
 explain:`## Agarose gel 전기영동 — 재료와 원리\n\n**원리**: DNA는 인산골격 때문에 **(-)전하** → 전기장에서 **(-)극 → (+)극**으로 이동. agarose 그물을 통과하며 **작은 단편일수록 빨리·멀리** 이동 → 크기별 분리.\n\n**TAE buffer 구성과 역할**\n| 성분 | 역할 |\n|---|---|\n| **Tris** | pH 완충(양이온 공급). pH가 ~11로 높음 |\n| **Acetate(아세트산)** | Tris의 높은 pH를 **낮춰주는 역할**(pH 11이면 DNA가 해리됨) |\n| **EDTA** | **chelating agent** — Mg²⁺ 등 양이온을 붙잡아 **DNase 활성 억제**, DNA의 (-)charge 유지·보호 |\n\n**EtBr(Ethidium Bromide) / Safe-view**: ds-DNA에 끼어드는 **intercalator**, **UV 조사 시 형광** → DNA band 위치를 눈으로 확인.\n\n**Agarose powder**: 한천 유래 다당류, 그물 구조로 분자체(sieving) 역할.\n\n**이동속도에 영향을 주는 인자**: ① **Time**(길수록 많이 내려감) ② **Voltage**(높을수록 빠름) ③ **Buffer**(이온농도 높을수록 빠르나 발열↑) — 그리고 DNA 단편 **크기**.\n\n**한 줄 요약**: DNA는 (-)→(+) 이동, 작을수록 빨리. Acetate=pH 낮춤, EDTA=DNase 억제, EtBr=UV 형광으로 가시화.`,
 exam:'', freq:1},

{id:23, part:'전기영동', topic:'Agarose gel·TAE buffer', origin:'jokbo', type:'essay',
 q:`Agarose gel 전기영동 buffer 성분 중 **Acetate**와 **EDTA**의 역할을 각각 서술하시오. (2025 기말 ⑫)`,
 choices:[], answer:[],
 explain:`**Acetate**: TAE buffer의 Tris는 pH가 약 11로 매우 높은데, 이 상태면 **DNA가 해리(변성)**될 수 있다. **Acetate가 pH를 낮춰** DNA가 안정한 적정 pH를 유지하게 한다.\n\n**EDTA**: **Chelating agent**(킬레이트제)로 Mg²⁺ 등 **양이온을 붙잡는다**. ① **DNase**는 Mg²⁺를 보조인자로 쓰므로, EDTA가 양이온을 제거하면 **DNase 활성이 억제**되어 DNA가 분해되지 않는다. ② DNA의 (-)전하 상태를 유지하도록 돕는다.\n\n(추가) **EtBr**도 함께 출제됨 — UV에서 형광을 내 DNA band를 가시화. (강의안 'Agarose gel materials' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:24, part:'전기영동', topic:'전극·DNA 이동·band', origin:'jokbo', type:'single',
 q:`Agarose gel에서 well은 **위쪽**에 있고 아래로 ladder가 100→900 bp 순으로 찍혔다. **gel의 위/아래 전극**과 600 bp band 위치로 옳은 것은? (2025 기말 ⑬)`,
 choices:[
  '위 (+), 아래 (-) / DNA는 위로 이동',
  '위 (-), 아래 (+) / 600 bp는 100·900 사이 중간보다 위쪽',
  '위 (+), 아래 (-) / 600 bp는 맨 아래',
  '위 (-), 아래 (+) / 작은 단편일수록 위쪽에 남는다',
  '전극 방향은 이동에 무관하다'],
 answer:[2],
 explain:`**정답: ② 위 (-), 아래 (+)**\n\n- DNA는 (-)전하 → **(-)극(위)에서 (+)극(아래)로 이동**. 그래서 well(시료 주입구)은 (-)극 쪽인 위에 둔다.\n- **작은 단편일수록 빨리·멀리** 이동 → 아래쪽(=큰 번호 쪽). ladder가 위 100bp → 아래 900bp 라면, 큰 단편이 덜 내려간 배치이므로 그림 방향을 따라 600bp 위치를 표시.\n- ④ 틀림: 작은 단편일수록 **아래쪽(멀리)**으로 간다.\n\n실제 시험은 빈칸에 전극((-)/(+))을 쓰고 3번 well의 600 bp band 위치를 직접 그리게 함. (강의안 'Agarose gel loading' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:25, part:'전기영동', topic:'전극·DNA 이동·band', origin:'jokbo', type:'short',
 q:`Gel 전기영동에서 **DNA의 이동 속도에 영향을 주는 인자**를 (2~)3가지 쓰시오. (2025 기말 ⑭)`,
 choices:[], answer:[],
 explain:`**정답: ① Time(영동 시간) ② Voltage(전압) ③ Buffer(영동 버퍼)**\n\n- **Time**: 오래 걸수록 DNA가 더 멀리 내려감\n- **Voltage**: 전압이 높을수록 빨리 이동(단, 너무 높으면 발열로 gel 손상)\n- **Buffer**: 이온 농도가 높을수록 전류가 잘 흘러 빠르나 발열↑ → 적정 농도 필요\n\n(추가로 DNA **단편 크기**, agarose **농도**도 분리에 영향). 강의안 'Gel electrophoresis' 슬라이드에 Time·Voltage·Buffer 3개가 묶여 강조됨.`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

/* ===================== BLAST계통 ===================== */
{id:26, part:'BLAST계통', topic:'BLAST·distance matrix·백신선택', origin:'summary', type:'summary',
 explain:`## BLAST와 계통분석 — strain 동정·백신 선택\n\n**BLAST(Basic Local Alignment Search Tool)**: 내가 sequencing한 염기서열을 **DB의 서열들과 비교**해 가장 비슷한 것을 찾는 도구.\n- 결과로 알 수 있는 것: ① **어떤 바이러스/종인지(동정)** ② **genotype·strain** ③ 매칭의 **Percent identity, E-value, Query coverage**\n- 실습 맥락: PRRS sequencing 결과를 BLAST → 대부분 PRRS와 일치 → 검출 유전자가 PRRSV임을 확인.\n\n**Phylogenetic tree(계통수)**: 여러 서열의 유연관계를 가지 그림으로 표현. 가까운 가지 = 서열이 유사.\n\n**Distance matrix(거리 행렬, MEGA)**: 서열을 1:1 비교한 점수표.\n- **수치 낮을수록 가깝다(유사), 클수록 멀다(상이).**\n- 절대값이 아니라 **상대 비교**용 — 같은 표 안에서만 비교 의미.\n\n**백신 선택 원리(실습 최종 목표)**: 농장에서 검출된 PRRSV strain의 **ORF5 서열**과 시판 백신들의 ORF5를 distance matrix로 비교 → **수치가 가장 낮은(가장 가까운) 백신**을 선택해야 방어력이 좋다.\n\n**한 줄 요약**: BLAST=무슨 바이러스/genotype인지 알아낸다. distance 수치 낮을수록 가까움 → 발생주와 가장 가까운 백신 선택.`,
 exam:'', freq:1},

{id:27, part:'BLAST계통', topic:'BLAST·distance matrix·백신선택', origin:'jokbo', type:'short',
 q:`BLAST 분석으로 **알 수 있는 것 2가지**를 쓰시오. (2025 기말 ⑰)`,
 choices:[], answer:[],
 explain:`**정답(대표): ① 검출된 서열이 어떤 바이러스/종인지(동정) ② genotype·strain(유전형)**\n\n- BLAST는 내 서열을 DB와 비교해 가장 유사한 서열을 찾아주므로, **바이러스명(종 동정)**과 **유전형/strain**을 알 수 있다.\n- 함께 보는 지표: **Percent identity(일치도), E-value, Query coverage** — 이들도 "알 수 있는 것"으로 인정 가능.\n\n*(학생 복기: "바이러스명이랑 genotype 썼다"고 함 — 합리적 답안.)* (강의안 'BLAST 진행' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:28, part:'BLAST계통', topic:'BLAST·distance matrix·백신선택', origin:'jokbo', type:'single',
 q:`PRRSV ORF5 distance matrix(MEGA) 표를 해석할 때 **옳지 않은 것**은? (2025 기말 ⑱, 백신 선택)`,
 choices:[
  '수치가 낮을수록 두 서열이 가깝다(유사)',
  '수치가 클수록 두 서열이 멀다(상이)',
  '발생 strain과 distance 수치가 가장 낮은 백신을 선택해야 방어가 잘 된다',
  '수치가 가장 큰(가장 먼) 백신을 선택해야 교차방어가 가장 좋다',
  '표의 수치는 절대값이 아니라 같은 표 안에서의 상대 비교에 쓴다'],
 answer:[4],
 explain:`**정답(옳지 않은 것): ④**\n\n- ④ ✗: distance가 **클수록 = 서열이 멀다 = 방어 떨어짐**. 백신은 **수치가 가장 낮은(발생주와 가장 가까운)** 것을 선택해야 한다.\n- ①② ✓: 낮을수록 가깝고, 클수록 멈.\n- ③ ✓: 발생 strain과 가장 가까운(낮은 수치) 백신 선택 = 실습 최종 목표(ORF5 일치도 높은 백신).\n- ⑤ ✓: distance는 상대 비교용.\n\n핵심: **가까운(낮은 수치) = 좋은 백신**. (강의안 '백신주 상동성 분석' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

/* ===================== PRRS ===================== */
{id:29, part:'PRRS', topic:'PRRSV 분류·유전체', origin:'summary', type:'summary',
 explain:`## PRRSV — 실습의 주인공 바이러스\n\n**PRRSV(Porcine Reproductive and Respiratory Syndrome Virus, 돼지생식기호흡기증후군)**\n- 분류: **Arterivirus 속, Arteriviridae 과** (Nidovirales 목)\n- 형태: **40~70 nm, 외피보유(enveloped)**\n- 유전체: **(+)ssRNA, 약 15 kb**, **ORF1~ORF7 (7개)**\n\n**ORF별 역할(시험 핵심)**\n| ORF | 변이 | 진단 용도 |\n|---|---|---|\n| **ORF7** | 가장 **적음**(보존적) | **감염 여부 진단** RT-PCR 표적 |\n| **ORF5**(→GP5) | 가장 **많음**(가변) | **genotype/strain 구분·백신 매칭** RT-PCR 표적 |\n\n**임상증상**: 주증상 = **번식장애 + 호흡기질병**\n- **모돈**: 식욕불량, 발열, 산자수 감소, 임신 후기 유·사산, 허약자돈 분만\n- **자돈**: 호흡기 증상, 발열, 무기력, 야윔, 2차 감염\n\n**유전형(EU vs NA)**\n- **PRRSV-1 = 유럽형(EU)**: 1991년 네덜란드 CVI에서 분리, **Lelystad**로 명명\n- **PRRSV-2 = 북미형(NA)**: 미국 분리주 **VR-2332**\n- 두 유전형은 약 **60% nucleotide 상동성**, 거의 동시 출현, RNA 중합효소 부정확성·재조합으로 **돌연변이율 높음**\n\n⚠️ **PRRSV는 (+)ssRNA 바이러스로 스스로 역전사하지 않는다**(RdRp로 RNA 복제). 실습의 RT-PCR은 진단을 위해 RTase 효소를 쓰는 **실험 기법**일 뿐, 바이러스가 역전사하는 것이 아니다(역전사 바이러스 = Retroviridae).\n\n**한 줄 요약**: Arteriviridae +ssRNA 15kb, ORF7=진단·ORF5=strain/백신, EU(Lelystad)/NA(VR-2332) 60% 상동, 번식+호흡기.`,
 exam:'', freq:2},

{id:30, part:'PRRS', topic:'PRRSV 분류·유전체', origin:'jokbo', type:'single',
 q:`PRRSV에 대한 설명으로 **옳지 않은 것**은? (2025 기말 ① 변형)`,
 choices:[
  'Arterivirus 속, Arteriviridae 과에 속한다',
  '40~70 nm의 외피보유(enveloped) 바이러스이다',
  'Positive-sense single-stranded RNA(+ssRNA) 유전체를 가진다',
  '약 15 kb 유전체에 ORF1~ORF7의 7개 ORF가 있다',
  'Double-stranded DNA를 유전체로 가지며 역전사로 복제한다'],
 answer:[5],
 explain:`**정답(옳지 않은 것): ⑤**\n\n- ⑤ ✗: PRRSV는 **(+)ssRNA** 바이러스다. **dsDNA·역전사**는 전혀 아니다(역전사=Retroviridae). PRRSV는 RdRp로 RNA를 직접 복제.\n- ①②③④ 모두 옳음: Arteriviridae, 40~70nm enveloped, +ssRNA, 15kb·ORF1~7.\n\n⚠️ 단골 함정: "PRRS가 역전사한다"는 진술. RT-PCR(실험기법)과 바이러스 복제방식을 혼동시키는 함정. (강의안 'PRRSV' 분류 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:31, part:'PRRS', topic:'ORF5·ORF7 진단표적', origin:'jokbo', type:'single',
 q:`PRRSV의 ORF에 대한 설명으로 **옳지 않은 것**은? (2025 기말 ②③, ORF 함정)`,
 choices:[
  'ORF7은 변이가 가장 적어 감염 여부 진단용 RT-PCR 표적으로 쓴다',
  'ORF5는 변이가 가장 많아 genotype·strain 구분에 쓴다',
  'ORF5는 표면단백질 GP5를 coding한다',
  'ORF7은 변이가 가장 많아 strain 구분(genotype)에 쓴다',
  '유전체는 ORF1~ORF7의 7개로 구성된다'],
 answer:[4],
 explain:`**정답(옳지 않은 것): ④**\n\n- ④ ✗: ORF7과 ORF5의 역할이 **뒤바뀜**. **ORF7 = 변이 최소 = 감염 진단**, **ORF5 = 변이 최대 = strain/genotype 구분**.\n- ①②③⑤ 모두 옳음.\n\n⚠️ 단골 함정: 출제자가 **ORF7 ↔ ORF5를 바꿔치기**(선배 메모 "ORF7→ORF5로 바꿔 냄"). 외우기: **7=적다=진단, 5=많다=strain**. (강의안 'Genome' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:2, source:'jokbo'},

{id:32, part:'PRRS', topic:'ORF5·ORF7 진단표적', origin:'jokbo', type:'multi',
 q:`PRRSV의 **viral genomic sequence(ORF5)**에 대한 OX 묶음. **옳은 설명을 모두 고르시오**. (2025 기말 ⑪ / 복기 7·8)`,
 choices:[
  'ORF5 서열은 모든 PRRSV strain 안에 존재한다',
  'ORF5는 strain마다 고유한 SNP를 가져 strain 차이 구분에 쓰인다',
  'ORF5(viral genomic sequence)는 항상 일정한 housekeeping 유전자이다',
  'ORF5 서열 비교로 phylogenetic tree를 그려 strain 상동성을 평가할 수 있다'],
 answer:[1,2,4],
 explain:`**정답: ①②④ (③만 틀림)**\n\n- ① ✓: ORF5는 모든 PRRSV strain에 존재(그래서 진단 marker로 보편적).\n- ② ✓: strain마다 고유 **SNP** → **strain 구분(genotyping)**에 사용. (복기 Q8 = O)\n- ③ ✗: **housekeeping 유전자는 항상 보존적(일정)**으로 발현되어 기준(reference)으로 쓰는 세포 유전자다. ORF5는 정반대로 **변이가 큰(가변)** 부위라 housekeeping이 아니다. (복기 Q7 "viral genomic sequence가 housekeeping이다" = ✗)\n- ④ ✓: ORF5 서열로 계통수 작성·상동성 평가.\n\n핵심 대비: **"ORF5=housekeeping" = 틀림(가변이라서)**, **"ORF5=strain 구분" = 맞음(SNP)**. 이 둘이 짝 함정. (강의안 'PRRSV ORF5 RNA' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:1, source:'jokbo'},

{id:33, part:'PRRS', topic:'PRRSV 임상·변이', origin:'jokbo', type:'multi',
 q:`PRRSV의 특징으로 **옳은 것을 모두 고르시오**. (2025 기말 ④⑤ / 복기 5 — 7선지 중 3택형)`,
 choices:[
  '모돈에서 식욕불량·발열·산자수 감소·임신 후기 유산/사산 등 번식장애를 일으킨다',
  '자돈에서 호흡기 증상·발열·무기력·2차 감염을 일으킨다',
  'RNA 바이러스라 변이 속도가 빨라 분리주마다 유전·항원 차이가 커 방어가 어렵다',
  'ORF5는 변이가 적어 strain 구분에 적합하다',
  'PRRSV-1(EU)과 PRRSV-2(NA)는 약 99% nucleotide가 동일하다'],
 answer:[1,2,3],
 explain:`**정답: ①②③**\n\n- ①②③ ✓: 모돈 번식장애 + 자돈 호흡기, RNA 바이러스라 변이 빨라 방어 곤란 — 모두 강의안 그대로.\n- ④ ✗: **ORF5는 변이가 많아**(적어가 아님) strain 구분에 쓴다.\n- ⑤ ✗: EU와 NA는 약 **60% 상동성**(99% 아님). 거의 동시 출현했지만 유전적으로 꽤 다름.\n\n함정: ④ "변이 적어", ⑤ "99% 동일" 같은 숫자·방향 바꿔치기. (강의안 '임상증상'·'유럽과 미국 분리주' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:2, source:'jokbo'},

{id:34, part:'PRRS', topic:'EU/NA 분리주', origin:'jokbo', type:'single',
 q:`PRRSV 유럽형(EU)·북미형(NA) 분리주 설명으로 **옳지 않은 것**은? (2025 기말 ⑥⑦)`,
 choices:[
  'PRRSV-1(유럽형)은 1991년 네덜란드에서 분리되어 Lelystad로 명명되었다',
  'PRRSV-2(북미형)는 미국 분리주로 VR-2332로 명명되었다',
  'PRRSV-1(유럽형)은 미국에서 분리되어 VR-2332로 명명되었다',
  '두 유전형은 약 60% nucleotide 상동성을 보인다',
  '기원은 명확치 않으나 유럽·북미에서 거의 동시에 출현했다'],
 answer:[3],
 explain:`**정답(옳지 않은 것): ③**\n\n- ③ ✗: **유럽형(PRRSV-1) = Lelystad(네덜란드)**, **북미형(PRRSV-2) = VR-2332(미국)**. 이름을 **바꿔치기**한 틀린 선지(선배 메모 "Lelystad→VR-2332로 바꿈").\n- ①②④⑤ 모두 옳음.\n\n외우기: **EU=유럽=Lelystad(1991 네덜란드)**, **NA=북미=VR-2332(미국)**, 둘 **60% 상동**. (강의안 '유럽과 미국 분리주' 슬라이드)`,
 exam:'2025-기말', hl2025:true, freq:2, source:'jokbo'},

/* ===================== 부검유제 (출제 안 됨 — 배경) ===================== */
{id:35, part:'부검유제', topic:'부검·유제 (2025 미출제)', origin:'summary', type:'summary',
 explain:`## 부검·조직 유제 — ※ 2025 시험 미출제 (배경 참고용)\n\n선배 표시: **2025 기말에는 부검(autopsy)·조직 유제(tissue homogenization) 내용이 출제되지 않았음**. 흐름 이해용으로만 정리.\n\n**부검 검체 5장기 채취 순서**: ① 편도(tonsil) ② 폐(lung) ③ 간(liver) ④ 비장(spleen) ⑤ 종격 림프절(mediastinal LN) → **6 well plate에 소분**\n- ⚠️ **편도(tonsil)는 고정·동결 금지**(DO NOT FIX OR FREEZE) — 오제스키병 진단 등에 중요한 장기\n- PRRSV는 **폐(폐포대식세포)·림프절**에서 주로 검출\n\n**조직 유제(homogenization)**: 병변 조직을 갈아 바이러스를 추출\n- **Sea sand(SiO₂)**: 조직을 곱게 갈기 위한 연마재, 유제 후 **원심분리로 제거**\n- protocol: 조직 ~1 g + sea sand로 유제 → PBS 10 ml → **3,000 rpm, 10분, 4℃ 원심** → 상층액 300 µl 회수\n\n**실습 전체 목표**: 사산돈 조직에서 RNA 추출 → RT-PCR로 **PRRSV ORF5** 서열 분석 → 시판 백신 중 **ORF5 일치도가 가장 높은 백신**을 농장에 추천.\n\n**한 줄 요약**: (2025 미출제) 5장기 채취·tonsil 고정금지·sea sand 유제·3000rpm 원심. 실습 목표=ORF5로 맞춤 백신 선택.`,
 exam:'', freq:1},

/* ===================== 2024 추가 출제부위 ===================== */
{id:36, part:'전기영동', topic:'Agarose gel 농도·크기', origin:'jokbo', type:'single',
 q:`Agarose gel 농도와 DNA 분리에 대한 설명으로 옳은 것은? (2024 출제부위)`,
 choices:[
  '저농도(예 0.8%) gel은 큰 DNA 단편 분리에 유리하다',
  '고농도 gel은 큰 DNA 분리에 유리하다',
  'gel 농도는 분리능과 무관하다',
  '저농도 gel일수록 작은 단편이 더 잘 분리된다',
  'agarose 농도가 높을수록 큰 DNA가 빨리 이동한다'],
 answer:[1],
 explain:`**정답: ①**\n\n- **저농도(0.8% 등) gel = 그물이 성겨 → 큰 DNA 단편 분리에 유리**\n- **고농도(1.2%~) gel = 그물이 촘촘 → 작은 DNA 분리에 유리**\n\n실습에서는 "최대한 많은 DNA fragment를 모으기 위해 저농도(1%) gel"을 썼다. 목표 단편 크기에 맞춰 농도를 정한다. (2024 강의안 'Agarose gel Protocol' 슬라이드)`,
 exam:'2024-기말', hl2024:true, freq:1, source:'jokbo'},

{id:37, part:'전기영동', topic:'Gel extraction 개념·프로토콜', origin:'summary', type:'summary',
 explain:`## Gel extraction — 전기영동 gel에서 목표 DNA 회수\n\n**정의**: agarose gel 전기영동으로 분리한 뒤 **원하는 band(target DNA)만 잘라내 DNA를 회수**하는 기술. 이후 효소처리·연결·sequencing으로 이어짐.\n\n⚠️ **시험 예고(2024 강의안 명시)**: 기말에 **gel extraction protocol을 영어로 출제**. 순서를 영어로 익혀둘 것.\n\n**원리**: spin column과 동일 — **BNL buffer(=chaotropic salt, agarose lysis)**로 gel을 녹이며 핵산을 silica에 흡착 → wash → 용출.\n\n**Protocol(MEGAquick-spin) 핵심 수치**\n| 단계 | 내용 |\n|---|---|\n| 1. Excise | target band를 메스로 잘라 1.5 ml tube |\n| 2. Lysis | **BNL Buffer 500 µl** 첨가 (agarose 당 사이 수소결합 방해해 gel 용해) |\n| 3. Incubate | 짧게 vortex 후 **55℃ 5~10분** → 완전 용해 |\n| 4. Bind | column에 옮겨 13,000 rpm 1분 (DNA가 silica에 흡착) |\n| 5. Wash | **Washing Buffer(80% EtOH) 750 µl**, 13,000 rpm 1분 |\n| 6. Dry | buffer 없이 원심 → **membrane 건조**(잔류 ethanol이 하류반응 방해) |\n| 7. Elute | **Elution Buffer(DW) 40 µl**, 1분 후 원심 → 순수 DNA |\n\n**한 줄 요약**: 목표 band 잘라 → BNL(chaotropic)로 녹여 silica 흡착 → 80% EtOH wash → 건조 → DW 용출. 프로토콜 영어 암기.`,
 exam:'', freq:1},

{id:38, part:'전기영동', topic:'Gel extraction 개념·프로토콜', origin:'jokbo', type:'short',
 q:`Gel extraction에서 **BNL buffer의 역할**과, **막 건조(membrane dry) 단계가 필요한 이유**를 쓰시오. (2024 출제부위)`,
 choices:[], answer:[],
 explain:`**BNL buffer 역할**: BNL buffer는 **chaotropic salt(고농도)** 로, ① agarose polymer의 당 사이 수소결합을 방해해 **gel slice를 녹이고**, ② 소수성 환경을 만들어 **DNA를 silica membrane에 흡착**시킨다. (55℃ 5~10분 incubation으로 완전 용해)\n\n**막 건조(dry) 이유**: washing(80% EtOH) 후 membrane에 남은 **잔류 ethanol이 downstream 반응(효소처리·PCR·sequencing)을 방해**하므로, buffer 없이 한 번 더 원심해 **ethanol을 완전히 제거**해야 한다.\n\n(2024 강의안 'Gel extraction Protocol' 슬라이드 — RNA 추출의 공회전과 같은 원리)`,
 exam:'2024-기말', hl2024:true, freq:1, source:'jokbo'},

{id:39, part:'BLAST계통', topic:'MEGA workflow·sequencing 전처리', origin:'jokbo', type:'short',
 q:`Sanger sequencing 결과 파일(.ab1)을 분석 전에 **trimming(전처리)** 해야 하는 이유를 쓰시오. (2024 출제부위)`,
 choices:[], answer:[],
 explain:`**정답**: sequencing 결과의 **3'과 5' 양 끝에는 제대로 읽히지 않은 noise 신호**가 있다(Sanger 기법의 한계). 이 noise를 그대로 BLAST·정렬에 쓰면 분석이 부정확해지므로, **양 끝 noise 구간을 trimming(잘라냄)**한 뒤 분석한다.\n\n참고 workflow(MEGA X): .ab1 열기 → (파일명에 _R/_NR이면) **Reverse Complement** → 좌·우 **trimming** → Do BLAST Search / MUSCLE alignment → distance·tree. (2024 강의안 'Sequencing 결과 파일' 슬라이드)`,
 exam:'2024-기말', hl2024:true, freq:1, source:'jokbo'},

{id:40, part:'BLAST계통', topic:'Phylogenetic tree 해석', origin:'jokbo', type:'single',
 q:`Neighbor-Joining phylogenetic tree 해석으로 **옳지 않은 것**은? (2024 출제부위)`,
 choices:[
  '가지의 연결점(node)은 가상의 공통조상이 존재함을 의미한다',
  '가까운 가지로 묶이는 서열일수록 유연관계가 가깝다(유사하다)',
  '같은 group으로 묶인 strain들을 조사해 역학적 특성을 추정한다',
  '내 서열이 어떤 reference와 공통조상을 갖는지로 유래를 추정한다',
  '가지 길이와 무관하게 같은 화면에 있으면 모두 동일한 strain이다'],
 answer:[5],
 explain:`**정답(옳지 않은 것): ⑤**\n\n- ⑤ ✗: 같은 화면에 있다고 동일 strain이 아니다. **가지로 묶이는 거리(유연관계)**로 판단한다. 멀리 떨어진 가지는 다른 strain.\n- ①②③④ ✓: node=공통조상, 가까운 가지=유사, 같은 group 조사로 역학 추정, 공통조상으로 유래 추정.\n\n예: 내 시퀀스(40-1)가 E38과 공통조상 → E38·CP687·KNU07과 같은 group → 이들을 조사해 역학 파악. (2024 강의안 'Phylogenetic analysis' 슬라이드)`,
 exam:'2024-기말', hl2024:true, freq:1, source:'jokbo'},

{id:41, part:'BLAST계통', topic:'BLAST genotype 확인', origin:'jokbo', type:'ox',
 q:`"BLAST 결과의 세부 내용을 보면 검출된 PRRSV가 NA(북미)형인지 EU(유럽)형인지 genotype을 확인할 수 있다." (2024 출제부위)`,
 choices:['O (맞음)','X (틀림)'], answer:[1],
 explain:`**정답: O**\n\nBLAST 결과에서 ① 대부분이 PRRS와 매칭되는지로 **바이러스 동정**, ② Max score 높은 매칭의 세부 내용에서 **genotype(NA형/EU형)**을 확인한다. 이 genotype에 맞춰 reference(eu_ref/na_ref)를 골라 phylogenetic 분석으로 이어간다. (2024 강의안 'BLAST 진행' 슬라이드)`,
 exam:'2024-기말', hl2024:true, freq:1, source:'jokbo'},

];
