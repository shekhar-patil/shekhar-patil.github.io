---

sidebar_position: 1
---

# General Tree

```go
class TreeNode:
  def __init__(self, name, designation) -> None:
    self.name = name
    self.designation = designation
    self.child = []
    self.parent = None

  def add_node(self, name, designation):
    child = TreeNode(name, designation)
    child.parent = self

    self.child += [child]
    return child

  def print_tree(self):
    padding = self.node_level() * " " * 3
    padding += ("|_ _" if self.parent else "")
    print(padding + self.name + " (" + self.designation + ")")
    if self.child:
      for node in self.child:
        node.print_tree()

  def node_level(self):
    parent = self.parent
    level = 0
    while parent:
      level += 1
      parent = parent.parent

    return level

  def build_tree(self):
    cto = root.add_node("Shyamu", "CTO")
    hr_head = root.add_node("Nikita", "HR Head")

    infra_head = cto.add_node("ramu", "Infra Head")
    cto.add_node("rahul", "Application head")

    hr_head.add_node("akshay", "Recruitment Manager")
    hr_head.add_node("paresh", "Policy Manager")

    infra_head.add_node("Dhaval", "Cloud Manager")
    infra_head.add_node("ABhijit", "App Manager")



if __name__ == "__main__":
  root = TreeNode("Shekhar Patil", "CEO")

  root.build_tree()

  root.print_tree()
```

Feel free to follow my work on GitHub: [Singly linked list in Python](https://github.com/shekhar-patil/data_structure_and_algorithms/blob/main/data_structures/trees/general_trees/python/general_tree.py).