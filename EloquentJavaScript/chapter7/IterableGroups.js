/*
Eloquent Javascript chapter 7 exorcice 3 implementation

Iterable groups
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified during
iteration.

Page 115 on book.
Page 127 on pdf.
*/

class Group {
  constructor() {
    this.group = [];
  }
  [Symbol.iterator]() {
    let index = 0;
    let group = this.group;
    return {
      next() {
        if (index >= group.length) {
          return { value: undefined, done: true };
        } else {
          return { value: group[index++], done: false };
        }
      },
    };
  }

  add(value) {
    if (this.has(value)) {
      return `${value}` + "exists!";
    } else {
      this.group.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      this.group = this.group.filter((element) => element !== value);
    } else {
      return `${value}` + "not in group";
    }
  }

  has(value) {
    return this.group.indexOf(value) !== -1;
  }

  static from(iterable) {
    const group = new Group();
    for (const element of iterable) {
      group.add(element);
    }
    return group;
  }
}

const group = new Group();
group.add(2);
group.add(4);
group.add(5);

// Should be iterabla
for (const element of group) {
  console.log(element);
}
