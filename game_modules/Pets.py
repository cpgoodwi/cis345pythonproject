"""Class file for Pets"""


class Sloth:
    """Base class for all pets"""
    tier = 1
    pack = (True, True)

    def __init__(self, ap=1, hp=1, xp=1, eq=None):
        self.name = type(self).__name__
        self.ap = ap
        self.hp = hp
        self.xp = xp
        self.eq = eq

    def __str__(self):
        return "Sloth"

    @property
    def to_dict(self):
        return {"name": self.name,
                "tier": self.__class__.tier,
                "img_url": f"https://superauto.pet/assets/pet-{self.name.casefold()}.svg",
                "ap": self.ap,
                "hp": self.hp,
                "xp": self.xp,
                "eq": self.eq}


class Ant(Sloth):
    """Class definition for Ant Pet"""
    tier = 1
    pack = (True, True)

    def __init__(self, ap=2, hp=1, xp=1, eq=None):
        super().__init__(ap, hp, xp, eq)

    def __str__(self):
        return "Ant"


class Beaver(Sloth):
    tier = 1
    pack = (True, True)

    def __init__(self, ap=2, hp=2, xp=1, eq=None):
        super().__init__(ap, hp, xp, eq)

    def __str__(self):
        return "Beaver"
