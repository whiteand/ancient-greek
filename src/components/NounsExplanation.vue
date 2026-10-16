<template>
  <p>
    Кл. = наз. (якщо не зазначено інакше); кольором позначено закінчення, а не історичні суфікси.
  </p>
  <SectionSubheader id="first-declension">
    I відміна
    <span class="whitespace-nowrap">
      (так звані <Gr text="**ᾱ‑**" highlight-class="text-cyan-600 dark:text-cyan-400" />/<Gr
        text="**ᾰ‑**"
        highlight-class="text-cyan-600 dark:text-cyan-400"
      />основи)
    </span>
  </SectionSubheader>
  <FirstDeclensionTable />

  <p>
    Крім іменників жін. роду, до <Gr text="ᾱ-" class="text-cyan-600 dark:text-cyan-400" />основ I
    відміни належать і іменники чол. роду: вони мають у наз. одн. закінчення -<Gr text="ᾱς" /> /-<Gr
      text="ης"
    />; у род. одн. -<Gr text="ου" /> а в кл. одн. -<Gr text="ᾱ" /> (у іменниках на -<Gr
      text="ᾱς"
    />), -<Gr text="η" /> (у іменниках на -<Gr text="ης" />) та -<Gr text="ᾰ" /> (у іменниках на
    -<Gr text="της" />: <Gr text="ὦ ποιητά" />); інші відмінки збігаються з відповідними зразками
    жін. роду.
  </p>

  <p>Стягнені іменники: <Gr text="ἡ Ἀθηνᾶ, Ἀθηνᾶς, Ἀθηνᾷ, Ἀθηνᾶν; ἡ γῆ, γῆς, γῇ, γῆν." /></p>

  <SectionSubheader id="second-declension">
    II відміна (так звані
    <Gr text="**ο̆-**" highlight-class="text-cyan-600 dark:text-cyan-400" />основи)
  </SectionSubheader>
  <SecondDeclensionTable />

  <p>
    Іменники II відміни — переважно чол. та сер. роду; іменники жін. роду, що відмінюються цілком
    так само, як чол., — це назви істот жіночої статі (<Gr text="ἡ παρθένος" /> <em>діва</em>),
    країн (<Gr text="ἡ Αἴγυπτος" />), міст (<Gr text="ἡ Κόρινθος" />), островів (<Gr
      text="ἡ Δῆλος"
    />), дерев (<Gr text="ἡ φηγός" /> <em>дуб</em>) та деякі загальні назви (<Gr text="ἡ νόσος" />
    {{ ' ' }}<em>хвороба</em>).
  </p>

  <p>
    <strong>Для іменників сер. роду всіх відмін і всіх чисел діє правило: наз. = зн. = кл.</strong>
  </p>

  <p>
    Стягнені іменники: <Gr text="ὁ νοῦς" /> &lt; <Gr text="νόος" /> <em>розум</em>,
    <Gr text="τὸ ὀστοῦν" /> &lt; <Gr text="ὀστέον" /> <em>кістка</em>.
  </p>

  <p>
    Так звана аттична відміна: <Gr text="ὁ νεώς" /> (&lt; <Gr text="νηός" />) <em>храм</em>,
    <Gr text="νεώ, νεῴ, νεών" />; мн. <Gr text="νεῴ, νεών, νεῴς, νεώς" />.
  </p>

  <SectionSubheader id="third-declension">III відміна</SectionSubheader>

  <p>
    <strong>Приголосні основи</strong> (основу отримуємо, відкинувши закінчення -<Gr text="ος" />
    род. одн.) закінчуються на:
  </p>

  <div
    class="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-center lg:gap-8"
  >
    <ThirdDeclensionVelarLabialTable />
    <ThirdDeclensionEndingsTable />
  </div>

  <div>
    <div class="grid grid-cols-[auto_1fr] gap-x-2">
      <div class="text-right">N.B. <Gr text="ἡ" /></div>
      <div class="text-left">
        <Gr text="γυν**ή**" /> <em>жінка</em>,
        <Gr text="γυναικ**ός**, γυναικ**ί**, γυναῖκ**α**, γύναι" />
      </div>
      <div class="text-right">
        <Gr text="αἱ" />
      </div>
      <div class="text-left">
        <Gr text="γυναῖκ**ες**, γυναικ**ῶν**, γυναιξ**ί**, γυναῖκ**ας**, γυναῖκ**ες**." />
      </div>
    </div>
  </div>

  <ThirdDeclensionDentalTable />

  <ul class="list-disc pl-5">
    <li>
      Іменники на -<Gr text="ις" />, -<Gr text="υς" /> (<Gr text="χάρις, -τος" /> {{ ' '
      }}<em>вдячність</em>; <Gr text="ἔρις, -δος" /> <em>чвара</em>; <Gr text="ὄρνῑς, -θος" />
      {{ ' ' }}<em>птах</em>; <Gr text="κόρυς, -θος" /> <em>шолом</em>) з наголосом не на останньому
      складі часто утворюють зн. одн. на -<Gr text="ιν" />, -<Gr text="υν" /> (<Gr
        text="χάριν, κόρυν"
      />).
    </li>
    <li>
      Особливості: <Gr text="ὁ πούς, ποδός" /> <em>нога</em>, <Gr text="τὸ οὖς, ὠτός" /> {{ ' '
      }}<em>вухо</em>, <Gr text="τὸ φῶς, φωτός" /> <em>світло</em>, <Gr text="τὸ γόνυ, γόνατος" />
      {{ ' ' }}<em>коліно</em>, <Gr text="τὸ δόρυ, δόρατος" /> {{ ' ' }}<em>спис</em>,
      <Gr text="τὸ ὕδωρ, ὕδατος" /> <em>вода</em>, <Gr text="ἡ νύξ, νυκτός" /> <em>ніч</em>.
    </li>
  </ul>

  <ThirdDeclensionNasalLiquidTable />

  <p>
    До <em class="text-cyan-600 dark:text-cyan-400">n</em>-основ належать також іменники типу
    <Gr text="ὁ Ἕλλην, -ηνος" /> та <Gr text="ὁ ποιμήν, -ένος" />.
  </p>
  <ul class="list-disc pl-5">
    <li>
      <Gr text="Ἀπόλλων, -ωνος" />, зн. <Gr text="Ἀπόλλω (-ωνα)" />, кл. <Gr text="Ἄπολλον" />;
      <Gr text="Ποσειδῶν, -ῶνος" />, зн. <Gr text="Ποσειδῶ (-ῶνα)" />, кл. <Gr text="Πόσειδον" />;
      <Gr text="ἡ Σαλαμῑ́ς, -ῖνος" />; <Gr text="ὁ δελφῑ́ς, -ῖνος" /> мають сигматичний називний.
    </li>
    <li>
      <Gr text="ὁ / ἡ κύων" /> <em>пес</em>, <Gr text="κυνός, κυνί, κύνα, κύον" />;
      <Gr text="οἱ / αἱ κύνες, κυνῶν, κυσί, κύνᾰς, κύνες" />.
    </li>
  </ul>
  <p>
    До <em class="text-cyan-600 dark:text-cyan-400">r</em>-основ належить також
    <Gr text="ὁ μάρτυς, -υρος" /> <em>свідок</em> з дав. мн. <Gr text="μάρτυσι" />;
    <Gr text="ἡ χείρ, -ός" /> <em>рука</em> має дав. мн. <Gr text="χερσί" />.
  </p>
  <ul class="list-disc pl-5">
    <li>
      Як <Gr text="μήτηρ" /> <em>мати</em> відмінюються також <Gr text="ὁ πατήρ" /> {{ ' '
      }}<em>батько</em>, <Gr text="ἡ θυγάτηρ" /> <em>дочка</em> та <Gr text="ἡ γαστήρ" /> {{ ' '
      }}<em>живіт</em>.
    </li>
  </ul>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import SectionSubheader from './SectionSubheader.vue'
import FirstDeclensionTable from './FirstDeclensionTable.vue'
import SecondDeclensionTable from './SecondDeclensionTable.vue'
import ThirdDeclensionVelarLabialTable from './ThirdDeclensionVelarLabialTable.vue'
import ThirdDeclensionEndingsTable from './ThirdDeclensionEndingsTable.vue'
import ThirdDeclensionDentalTable from './ThirdDeclensionDentalTable.vue'
import ThirdDeclensionNasalLiquidTable from './ThirdDeclensionNasalLiquidTable.vue'
</script>
