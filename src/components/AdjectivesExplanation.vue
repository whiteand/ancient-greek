<template>
  <SectionSubheader id="adjectives-ii-i">Прикметники II та I відміни</SectionSubheader>
  <ul class="list-disc pl-5">
    <li>
      <em>Прикметники трьох закінчень</em> {{ ' ' }} <Gr text="**-ος,**" /> {{ ' ' }}
      <Gr text="**-η,**" /> {{ ' ' }} <Gr text="**-ον**" />: <Gr text="ἀγαθός, ἀγαθή, ἀγαθόν" />
      {{ ' ' }} <em>добрий</em>; <Gr text="δίκαιος, δικαίᾱ, δίκαιον" /> {{ ' ' }}
      <em>справедливий</em>
      (жін. має в одн. <Gr text="-ᾱ" /> після <Gr text="ε, ι, ρ" />, інакше має <Gr text="-η" />).
      Чол. та сер. відмінюються за II відміною, жін. — за I відміною.
    </li>
    <li>
      <em>Стягнені прикметники трьох закінчень:</em> {{ ' ' }} <Gr text="χρῡσοῦς, χρῡσῆ, χρῡσοῦν" />
      {{ ' ' }} <em>золотий</em>; <Gr text="ἀργυροῦς, ἀργυρᾶ, ἀργυροῦν" /> {{ ' ' }}
      <em>срібний</em>
      (чол. та сер. відмінюються за стягненими іменниками II відміни; жін. має
      <Gr text="-ᾶ" /> після <Gr text="ρ" />, інакше <Gr text="-ῆ" />).
    </li>
    <li>
      <em>Прикметники двох закінчень на</em> {{ ' ' }} <Gr text="**-ος,**" /> {{ ' ' }}
      <Gr text="**-ον**" />
      (<Gr text="-ος" /> для чол. і жін.): <Gr text="ἥσυχος, ἥσυχον" /> {{ ' ' }}
      <em>спокійний</em>.
    </li>
    <li>
      <em>Стягнені прикметники двох закінчень:</em> {{ ' ' }} <Gr text="εὔνους, εὔνουν" /> {{ ' ' }}
      <em>прихильний</em>
      (відмінюється за стягненими іменниками II відміни; наз. + зн. мн. сер. =
      <Gr text="εὔνοα" />).
    </li>
  </ul>

  <SectionSubheader id="adjectives-iii">Прикметники III відміни</SectionSubheader>
  <p>
    У прикметників трьох закінчень форми жін. роду відмінюються за іменниками I відміни, чол. та
    сер. — за відповідною основою III відміни.
  </p>
  <p>
    <span class="font-bold italic">а) основи, що закінчуються на простий зубний</span>
  </p>
  <ul class="list-disc pl-5">
    <li>
      <em>Прикметники одного закінчення</em> (одна форма для всіх 3 родів):
      <Gr text="πένης, -ήτος" /> {{ ' ' }}<em>бідний</em>; <Gr text="ἄπαις, -δος" /> {{ ' '
      }}<em>бездітний</em>.
    </li>
  </ul>
  <p>
    За <em class="text-cyan-600 dark:text-cyan-400">t</em>-основами відмінюється й дієприкметник
    перф. акт., що має форму прикметника трьох закінчень чол. {{ ' '
    }}<Gr text="πεπαιδευκώς, -κότος" />, жін. <Gr text="πεπαιδευκυῖα, -κυίᾱς" />, сер. {{ ' '
    }}<Gr text="πεπαιδευκός, -κότος" />.
  </p>
  <p>
    <span class="font-bold italic">б) основи на</span>
    {{ ' ' }}
    <Gr class="text-cyan-600 dark:text-cyan-400" text="-ντ" />
  </p>
  <ul class="list-disc pl-5">
    <li>
      <em>Прикметники трьох закінчень:</em> {{ ' ' }}<Gr text="πᾶς, πᾶσα, πᾶν" /> {{ ' '
      }}<em>цілий</em>, <em>весь</em>; <Gr text="ἑκών, ἑκοῦσα, ἑκόν" /> {{ ' ' }}<em>охочий</em>;
      <Gr text="χαρίεις, χαρίεσσα, χαρίεν" /> {{ ' ' }}<em>принадний</em>.
    </li>
  </ul>
  <ThirdDeclensionNtAdjectiveTable />
  <p>
    У чол. та сер. роді мають основу на {{ ' '
    }}<Gr class="text-cyan-600 dark:text-cyan-400" text="-ντ" />:
  </p>
  <p>
    дієприкм. през. акт.: {{ ' ' }}<Gr text="παιδεύων, -οντος, παιδεύουσα, παιδεῦον" />
    {{ ' ' }}(чол. та сер. відмінюються як {{ ' ' }}<Gr text="ἑκών" />)
  </p>
  <p>
    дієприкм. аор. пас.: {{ ' ' }}<Gr text="παιδευθείς, -θέντος, παιδευθεῖσα, παιδευθέν" />
    {{ ' ' }}(як {{ ' ' }}<Gr text="χαρίεις" />)
  </p>
  <ThirdDeclensionNasalSigmaUpsilonAdjectiveTable />
  <p>
    <em>Прикметники трьох закінчень</em> {{ ' '
    }}<em class="text-cyan-600 dark:text-cyan-400">n</em>-основи: чол. <Gr text="μέλᾱς, μέλᾰνος" />,
    жін. <Gr text="μέλαινα, μελαίνης" />, сер. <Gr text="μέλᾰν, μέλᾰνος" /> {{ ' '
    }}<em>чорний</em>.
  </p>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import SectionSubheader from './SectionSubheader.vue'
import ThirdDeclensionNtAdjectiveTable from './ThirdDeclensionNtAdjectiveTable.vue'
import ThirdDeclensionNasalSigmaUpsilonAdjectiveTable from './ThirdDeclensionNasalSigmaUpsilonAdjectiveTable.vue'
</script>
