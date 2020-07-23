---
title: Git Shell Prompt
date: 2013-08-20
slug: See if you're in a git repo when working on the command line
layout: post
---

__Update__ A few people have asked me for a repo so I've created a [clean.sh
project](https://github.com/trevoro/clean.sh) on Github.

If you're a developer then the tools you use from day to day forms a good part
of your experience. Something I like to know quickly in a shell is whether or
not my PWD is in a git repo or not. I also find it useful to know if I'm in
master or a different branch.

That can be accomplished quickly by setting your PS1 to include a single
character that tells you whether or not you're in a git repo. I use a `+` sign
to indicate that the current path is part of a git repo, and that its part of
the master branch. For other branches then I use the `*` token. I dont
necessarily care which branch it is. For that I still use `git branch`, but at
least I know I'm not on master.

```shell
WHITE="\[\033[1;37m\]"
GREEN="\[\033[0;32m\]"
RESET="\[\033[00m\]"
BGRAY="\[\033[01;36m\]"

_git_branch() {
  branch=$(git branch --no-color 2> /dev/null | sed -e '/^[^*]/d')
  if [ "${branch}" == "* master" ] ; then
    echo "+"
  elif [ "${branch}" ] ; then
    echo "*"
  else
    echo " "
  fi	
}

PS1="${GREEN}\h${BGRAY}:\W${WHITE}\$(_git_branch)\$ ${RESET}"
```

Here's what you'll see if you're on master


    tethys:caliper-app+$ 

And if you're on a different branch...

    tethys:caliper-app*$ 

And if you're not in a git repo

    tethys:~ $ 

