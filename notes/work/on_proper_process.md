
# Example: 
## Angular
- https://blog.usejournal.com/comparison-between-angular-1-vs-angular-2-vs-angular-4-62fe79c379e3
- https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-angular-development/
- https://medium.com/p/afb36567ad68/responses/show

# Reviewing our current progress...
## reviewing our UI Kit
- Sprite: I can't decide whether to use sprite sheets or not
    - hinged on how much webpack config we want to handle
- no easy path to creating composite components
    - no "how to create your own component" journey map considered
    - no "how to use a component" journey map thought deeply (just considered)
- no idea how we should be using classNames extensions
- HTML element vs css styling: how coupled?
    - right now, it's fairly coupled
    - hence "atomic components" == "HTML elements"
    - but typography is not...
- some of the design decisions were based on feasibility
    - sass decoupled from javascript: we couldn't get sass variables to cascade
- variants
    - we just mapped them from zeplin, never asked how we should really handle this
    - we could wrap our components with a variant HOC, to keep the atomics simple
- usage
    - no idea how decoupled we want the UI kit to be from the starter kit
        - we have a lot more options if they're coupled more
    - no idea which versions of react we want to support
    - no idea if icons and asset storage are within the UI kit scope
- full scope of what features, standards and best practices we should have here
- no consideration of upgrade path or its difficulties
- haven't even considered how we should interact with dynamic content


## reviewing the Starter Kit
- We're starting with the DX Studio Starter Kit, and it's coming with lots of assumptions
    - static website
- no easy way to prioritize baseline technical standards, best practices we want to do
- versioning and upgrading difficulties not considered
    - difficulties could mean we don't want to do too many upgrades
    - or could certain parts be decoupled to be made upgradable?
- haven't considered how hard to use UI Kit in starter kit
- we're making ALOT of unfounded assumptions
    - no idea how many teams (can) will be using the starter kit
    - no idea all of the use cases

## Process
- community vs core definitions unclear
    - intake, rollout processes not easy to define
- very easy to use UI kit and starter kit WRONG, have not figured out how they should be used
- a lot of the difficulties is in the planning and team workflow
    - NOT tackling those vague processes == still inefficient work!
    - UI Kit and starter kit will be only small wins at best, more confusion, siloing at worst

## Adoption
- cannot prioritize our adoption strategy targets
- 

# summary of the problems
- we need to do all discovery and exploration properly before doing any more work
- it's getting increasingly hard to make decisions on both projects
- I can't prioritize - mvp, vertical slice baselines really hard to decide
- upgrading is much more difficult than originally assumed.
    - Angular was a disaster of an upgrade path. How do we avoid their mess?
    - React and Node have a decent upgrade path. How do they do things well?
    - we know users will be using the UI kit to create their webpages and components.
        - wouldn't it be hard to upgrade ALL their code that depends on us?

## Therefore... 
- we need to do the discovery, exploration phases properly.
- we need to create an envisioned system from the start; iteration needed but planned.
- properly understand our problems and users








