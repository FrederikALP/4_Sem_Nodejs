<script>
import Child from "../../components/Child/Child.svelte";
import Parent from "../../components/Parent/Parent.svelte";

import { supermarket } from "../../store/supermarket.js";

console.log($supermarket); //$ indicates it is the reactive value
// $ also means you are accessing the values inside, not the functions of the writable

const parents = [
        {
            key: 1,
            name: "Adam"
        },
        {
            key: 2,
            name: "Eve"
        }
    ];

// allow children to call a family meeting too
    function onFamilyMeetingCalled(whoCalled) {
        console.log("Family meeting called by", whoCalled);
    }
</script>

<h1>This is the home of the Svelte Family.</h1>

{#each parents as parent (parent.key)}
<Parent handleFamilyMeetingCall={onFamilyMeetingCalled} name={parent.name} />
{/each}

<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereotype="black-sheep" name = "Gustav"/>
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereotype="bright-kid" name = "Mads"/>
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} isGirl={true} name = "Ludvig"/>

<h1>This is the online portal for the supermarket</h1>
<p>{JSON.stringify($supermarket)}</p>