Search.setIndex({"docnames": ["chapter-13/20240510_representacion_datos", "chapter-13/analysis-A", "chapter-13/analysis-intro", "intro"], "filenames": ["chapter-13/20240510_representacion_datos.ipynb", "chapter-13/analysis-A.ipynb", "chapter-13/analysis-intro.ipynb", "intro.md"], "titles": ["Datos Pr\u00e1ctica Electricidad I,", "1 Characterizing experimental data. Accuracy, precision, mean and standard deviation", "13. Data Analysis", "Applying Maths in the Chemical and Biomolecular Sciences."], "terms": {"import": [0, 1], "panda": 0, "pd": 0, "numpi": [0, 1, 3], "np": [0, 1], "matplotlib": [0, 1, 3], "pyplot": [0, 1], "plt": [0, 1], "gridspec": 0, "ticker": 0, "color": [0, 1], "mcolor": 0, "rc": 0, "text": [0, 1, 3], "usetex": 0, "true": [0, 1, 2], "rcparam": [0, 1], "errorbar": 0, "capsiz": 0, "3": [0, 3], "colors_fig": 0, "list": [0, 1], "tableau_color": 0, "valu": [0, 2], "def": 0, "figura_regres": 0, "x": [0, 1, 3], "y": [0, 1], "titl": 0, "ioaisoipasip": 0, "x_label": 0, "r": [0, 1], "label": [0, 1, 3], "y_label": 0, "size": [0, 1], "8": 0, "zero": [0, 1, 2], "fals": 0, "save": 0, "funci\u00f3n": 0, "para": 0, "obten": 0, "lo": 0, "de": [0, 3], "la": 0, "regresin": 0, "lineal": 0, "p": [0, 1], "cov": 0, "polyfit": 0, "1": 0, "font": [0, 1], "famili": [0, 3], "serif": 0, "print": [0, 1], "pendient": 0, "su": 0, "error": [0, 2], "round": [0, 1], "0": [0, 1, 3], "sqrt": [0, 1], "2": 0, "n": [0, 1], "ordenada": 0, "en": 0, "el": 0, "origen": 0, "5": 0, "values_text": 0, "m": [0, 1], "pm": [0, 1], "delta": [0, 1], "str": 0, "indent": 0, "figur": [0, 1, 3], "figsiz": [0, 1], "constrained_layout": 0, "spec_1": 0, "ncol": 0, "nrow": 0, "fig_ax0": 0, "add_subplot": 0, "4": 0, "ax": [0, 1], "tick_param": 0, "axi": 0, "labels": 0, "20": [0, 1], "pad": 0, "length": [0, 1], "12": [0, 1], "set_titl": 0, "format": [0, 1], "fontsiz": 0, "30": [0, 1, 3], "k": 0, "set_xlabel": 0, "75": [0, 1], "labelpad": 0, "set_ylabel": 0, "bbox": 0, "dict": 0, "boxstyl": 0, "fc": 0, "blanchedalmond": 0, "ec": 0, "orang": 0, "alpha": [0, 1], "85": [0, 1], "transform": [0, 1, 3], "transax": 0, "horizontalalign": 0, "right": [0, 1], "els": [0, 1], "plot": [0, 1], "lw": 0, "c": [0, 1], "scatter": [0, 3], "polyv": 0, "s": 0, "80": [0, 1], "marker": 0, "min": 0, "axvlin": 0, "skyblu": 0, "axhlin": [0, 1], "file_nam": 0, "raw_input": 0, "u": [0, 1], "introduc": 0, "nombr": 0, "del": 0, "archivo": 0, "guardar": 0, "figura": 0, "se": 0, "formato": 0, "pdf": 0, "savefig": 0, "return": [0, 1], "data_1": 0, "datafram": 0, "resistencia": 0, "50": [0, 1], "70": [0, 1], "100": [0, 1], "150": 0, "voltaj": 0, "1371": 0, "1420": 0, "1452": 0, "1461": 0, "1465": 0, "1469": 0, "data_2": 0, "241": 0, "416": 0, "727": 0, "973": 0, "1097": 0, "data_3": 0, "719": 0, "1036": 0, "1132": 0, "1217": 0, "1291": 0, "regresion_1": 0, "textrm": 0, "ma": 0, "v": 0, "mv": 0, "values_data_1": 0, "dpi": 0, "180": 0, "bbox_inch": 0, "tight": 0, "regresion_2": 0, "values_data_2": 0, "regresion_3": 0, "values_data_3": 0, "all": [1, 2, 3], "python": [1, 3], "add": 1, "ons": 1, "etc": 1, "need": [1, 2, 3], "later": [1, 3], "inlin": 1, "sympi": [1, 3], "scipi": [1, 3], "integr": 1, "quad": 1, "stat": 1, "norm": 1, "statist": [1, 2], "function": 1, "init_print": 1, "allow": 1, "result": [1, 2, 3], "typeset": 1, "math": 1, "updat": [1, 3], "14": 1, "set": 1, "modulenotfounderror": 1, "traceback": 1, "most": [1, 3], "recent": 1, "call": 1, "last": 1, "cell": 1, "In": [1, 2], "No": 1, "modul": 1, "name": 1, "If": [1, 2], "sever": [1, 3], "read": [1, 3], "have": [1, 2, 3], "been": [1, 2, 3], "taken": 1, "quantiti": [1, 2], "exampl": [1, 3], "titrat": 1, "perform": 1, "ident": 1, "solut": [1, 3], "an": [1, 2, 3], "attempt": 1, "end": [1, 3], "point": [1, 2], "volum": 1, "quot": 1, "arithmet": 1, "langl": 1, "rangl": 1, "thi": [1, 2, 3], "sometim": 1, "also": [1, 2, 3], "bar": 1, "pronounc": 1, "word": 1, "often": 1, "us": [1, 2, 3], "instead": 1, "displaystyl": 1, "frac": 1, "sum_": 1, "x_i": 1, "x_1": 1, "x_2": 1, "x_3": 1, "cdot": 1, "x_n": 1, "qquad": 1, "tag": [1, 3], "where": 1, "ar": [1, 2, 3], "probabl": 1, "same": [1, 2], "ani": [1, 2, 3], "individu": 1, "alwai": [1, 2], "spread": [1, 2], "either": [1, 2], "side": [1, 2], "sum": 1, "differ": [1, 2], "between": 1, "each": [1, 3], "sum_i": 1, "tend": 1, "toward": [1, 3], "theoret": 1, "mu": 1, "number": [1, 3], "increas": [1, 2], "shown": 1, "constant": 1, "note": 1, "logarithm": 1, "abscissa": 1, "scale": 1, "One": 1, "trajectori": 1, "show": 1, "wai": 1, "approach": [1, 3], "experi": [1, 2, 3], "equat": [1, 3], "new": [1, 3], "select": 1, "random": [1, 2], "mani": [1, 3], "inher": 1, "mai": [1, 2], "reflect": 1, "describ": [1, 2], "section": 1, "A": 1, "squar": 1, "big": 1, "root": 1, "rm": 1, "produc": 1, "unbias": 1, "author": [1, 3], "defin": [1, 2], "divid": 1, "rather": 1, "than": [1, 2, 3], "definit": 1, "see": 1, "barlow": 1, "1989": 1, "11": 1, "one": [1, 2], "class": 1, "dispers": [1, 2], "indic": [1, 2], "rang": [1, 2, 3], "quantil": 1, "skew": 1, "kurtosi": 1, "peaked": 1, "other": [1, 2], "sai": 1, "subtract": 1, "up": 1, "answer": 1, "next": [1, 2], "total": 1, "less": [1, 3], "final": [1, 3], "take": 1, "principl": 1, "least": 1, "wide": 1, "model": 1, "analys": 1, "minim": 1, "respect": 1, "might": 1, "repres": 1, "which": [1, 2, 3], "appear": 1, "therefor": 1, "summat": 1, "should": [1, 2], "minimum": 1, "when": [1, 3], "differenti": [1, 3], "d": 1, "dm": 1, "2nm": 1, "inde": 1, "make": [1, 2, 3], "sens": [1, 2], "best": [1, 2], "suppos": 1, "underli": 1, "whose": 1, "width": 1, "determin": 1, "ha": [1, 2, 3], "its": [1, 2], "greek": 1, "letter": 1, "being": [1, 2], "reserv": 1, "what": [1, 2], "infinit": 1, "ideal": 1, "would": [1, 2, 3], "assum": 1, "gaussian": [1, 2], "fig": 1, "common": [1, 3], "poisson": 1, "13": [1, 3], "approxim": 1, "approx": 1, "10": 1, "greater": 1, "more": [1, 2, 3], "like": [1, 3], "can": [1, 2, 3], "equal": 1, "\u03bc": 1, "refer": 1, "known": [1, 2], "wherea": [1, 2], "obtain": [1, 2], "onli": [1, 2], "itself": [1, 3], "To": 1, "calcul": [1, 2, 3], "never": [1, 2], "exactli": 1, "usual": [1, 2], "strictli": 1, "speak": 1, "symbol": 1, "replac": 1, "becaus": [1, 2], "howev": [1, 2], "factor": 1, "enter": 1, "argument": 1, "theori": 1, "term": 1, "degre": [1, 3], "freedom": 1, "left": 1, "consid": [1, 2], "impos": 1, "restraint": 1, "roughli": 1, "equival": 1, "remov": [1, 2], "fewer": 1, "parratt": 1, "1971": 1, "repeat": [1, 2], "slightli": 1, "expect": [1, 2], "few": 1, "possibl": [1, 2], "written": [1, 3], "s_m": 1, "m_i": 1, "separ": 1, "evalu": 1, "directli": [1, 3], "requir": [1, 2], "huge": 1, "viz": 1, "nn": 1, "satisfactori": 1, "improv": [1, 2], "quit": [1, 3], "slow": 1, "process": 1, "signal": [1, 3], "nois": [1, 2], "reduc": [1, 2], "rel": 1, "hadamard": [1, 3], "chapter": [1, 2, 3], "9": [1, 2], "enabl": 1, "group": 1, "rapidli": 1, "just": 1, "simpli": 1, "relat": 1, "sigma_m": 1, "clearli": [1, 2], "fix": 1, "so": [1, 3], "necessari": [1, 3], "check": 1, "unfortun": 1, "given": [1, 2], "But": 1, "count": 1, "photon": 1, "particl": 1, "unlik": 1, "speed": 1, "molecul": [1, 3], "follow": 1, "maxwel": 1, "boltzmann": 1, "q54": 1, "lopsid": 1, "again": 1, "remark": [1, 3], "veloc": 1, "predict": [1, 2], "although": [1, 2, 3], "easi": 1, "demonstr": 1, "harder": 1, "prove": 1, "It": [1, 2, 3], "state": 1, "similar": 1, "almost": 1, "type": [1, 2], "form": [1, 2, 3], "pi": 1, "e": [1, 2], "larg": 1, "basi": [1, 3], "reason": [1, 2], "put": 1, "technic": 1, "subject": [1, 3], "variat": 1, "By": 1, "whole": 1, "about": [1, 2], "simul": 1, "illustr": 1, "five": 1, "b": 1, "could": [1, 2], "uniform": 1, "randomli": 1, "pair": 1, "correspond": 1, "look": 1, "entri": 1, "histogram": 1, "begin": 1, "littl": 1, "convincingli": 1, "algorithm": 1, "chosen": 1, "flat": 1, "thousand": 1, "seen": 1, "close": 1, "cluster": 1, "variabl": [1, 3], "origin": 1, "uncertainti": 1, "With": 1, "mind": [1, 3], "top": [1, 3], "initi": 1, "start": [1, 3], "besid": 1, "here": 1, "For": 1, "eventu": 1, "5000": 1, "reeat": 1, "av": 1, "dtype": 1, "float": 1, "arrai": 1, "hold": 1, "linspac": 1, "rand": 1, "av_x": 1, "sig": 1, "gau": 1, "lambda": 1, "exp": 1, "hash": 1, "16": 1, "red": [1, 3], "hist": 1, "bin": 1, "densiti": 1, "lightgrei": 1, "edgecolor": 1, "black": 1, "xlabel": 1, "ylabel": 1, "linewidth": 1, "grei": 1, "consider": 1, "properti": 1, "provid": [1, 3], "chanc": [1, 2], "alon": 1, "fall": 1, "insid": 1, "outsid": 1, "certain": [1, 2], "confirm": 1, "get": 1, "z": 1, "notic": 1, "we": 1, "95": [1, 2], "within": [1, 2], "96": 1, "lt": 1, "henc": 1, "interpret": 1, "practic": [1, 2], "typic": 1, "gt": 1, "25": 1, "6a": 1, "unless": 1, "qualifi": 1, "impli": 1, "uncertain": 1, "68": 1, "give": [1, 3], "l": 1, "hline": 1, "index": 1, "38": 1, "675": 1, "equiv": 1, "p_e": 1, "82": 1, "2p_e": 1, "45": 1, "99": 1, "73": 1, "9999": 1, "statement": 1, "made": [1, 2], "along": 1, "occur": [1, 2], "suggest": 1, "doe": [1, 2, 3], "belong": 1, "oppos": 1, "perhap": 1, "properli": 1, "establish": 1, "far": 1, "particularli": [1, 3], "physic": [1, 3], "infti": 1, "thu": 1, "pretti": 1, "much": [1, 3], "dead": 1, "cert": 1, "normalis": 1, "int_": 1, "dx": 1, "xp": 1, "2p": 1, "bell": 1, "shape": [1, 3], "curv": 1, "area": 1, "under": [1, 3], "symmetr": 1, "place": 1, "observ": 1, "mathrm": 1, "erf": 1, "950": 1, "yellow": 1, "exce": 1, "pure": 1, "6745": 1, "specif": 1, "inf": 1, "revers": 1, "usimng": 1, "w": 1, "oo": 1, "infin": 1, "done": [1, 2], "numer": [1, 3], "routin": 1, "mathtt": 1, "err": 1, "fnorm": 1, "now": [1, 3], "built": 1, "load": 1, "librari": 1, "page": [1, 3], "cdf": 1, "find": 1, "percentag": 1, "recal": 1, "remain": 1, "691": 1, "want": 1, "middl": 1, "exclud": 1, "both": 1, "work": [1, 3], "ppf": 1, "case": 1, "qtile": 1, "69146246": 1, "shade": 1, "975": 1, "025": 1, "account": [1, 2], "extrem": 1, "region": 1, "instanc": 1, "chi": 1, "appli": 1, "natur": [1, 2], "gener": 1, "z_": 1, "unknown": 1, "hundr": 1, "were": [1, 2], "pyrex": 1, "flask": 1, "wa": [1, 3], "found": 1, "136": 1, "48": 1, "g": 1, "31": 1, "mass": 1, "200": 1, "51": 1, "137": 1, "cautiou": 1, "133": 1, "141": 1, "62": 1, "level": [1, 2], "90": 1, "28": 1, "58": 1, "veri": [1, 2], "good": [1, 2], "wider": 1, "wing": 1, "t_": 1, "regularli": 1, "tail": 1, "cccc": 1, "ccc": 1, "05": 1, "005": 1, "314": 1, "706": 1, "63": 1, "657": 1, "796": 1, "201": 1, "106": 1, "920": 1, "303": 1, "925": 1, "782": 1, "179": 1, "055": 1, "353": 1, "182": 1, "841": 1, "771": 1, "160": 1, "012": 1, "132": 1, "776": 1, "604": 1, "761": 1, "145": 1, "977": 1, "015": 1, "571": 1, "032": 1, "15": 1, "753": 1, "131": 1, "947": 1, "943": 1, "447": 1, "707": 1, "725": 1, "086": 1, "845": 1, "895": 1, "365": 1, "499": 1, "697": 1, "042": 1, "750": 1, "860": 1, "306": 1, "355": 1, "40": 1, "684": 1, "021": 1, "704": 1, "833": 1, "262": 1, "250": 1, "676": 1, "009": 1, "678": 1, "812": 1, "228": 1, "169": 1, "645": 1, "960": 1, "576": 1, "larger": 1, "commerci": 1, "spectrometri": 1, "servic": 1, "21": 1, "18": 1, "06": 1, "22": 1, "55": 1, "49": 1, "dai": 1, "how": [1, 2, 3], "wait": 1, "sure": 1, "analysi": 1, "As": 1, "94": 1, "47": 1, "cdot6": 1, "79": 1, "17": 1, "24": 1, "certainli": 1, "worth": 1, "chang": 1, "your": 1, "supplier": 1, "fro": 1, "cumult": 1, "seven": 1, "six": 1, "invert": 1, "quant": 1, "prec": 1, "micro": 1, "analyt": [1, 3], "laboratori": 1, "certifi": 1, "ratio": 1, "compound": 1, "examin": 1, "know": 1, "accept": [1, 2], "thei": [1, 2], "bound": 1, "do": 1, "you": 1, "agre": 1, "solv": [1, 3], "problem": [1, 3], "involv": 1, "hypothes": 1, "whether": 1, "comput": [1, 3], "decis": 1, "independ": 1, "anoth": 1, "z_0": 1, "mu_0": 1, "go": 1, "converg": 1, "suffici": 1, "actual": 1, "certainti": 1, "ne": 1, "still": 1, "occas": 1, "conclus": 1, "lab": 1, "had": 1, "discrimin": 1, "second": [1, 2], "base": [1, 3], "subtli": 1, "t_0": 1, "466": 1, "33": 1, "reach": 1, "consist": 1, "elimin": 1, "systemat": [1, 2], "apparatu": 1, "literatur": [1, 2], "supposedli": 1, "thing": 1, "mu_1": 1, "mu_2": 1, "turn": 1, "simplest": 1, "rangle_1": 1, "rangle_2": 1, "s_": 1, "s_1": 1, "s_2": 1, "try": 1, "quantifi": 1, "manner": 1, "after": 1, "first": 1, "sigma_1": 1, "sigma_2": 1, "pool": 1, "s_p": 1, "n_1": 1, "n_2": 1, "similarli": [1, 2], "n_1n_2": 1, "clear": 1, "nomin": 1, "chromatograph": 1, "There": 1, "nine": 1, "eight": 1, "condit": 1, "subsequ": 1, "mg": 1, "26": 1, "23": 1, "evid": 1, "signific": [1, 2], "s_i": 1, "84": 1, "67": 1, "46": 1, "smaller": 1, "conclud": 1, "lower": 1, "65": 1, "upper": 1, "le": 1, "ge": 1, "instrument": [1, 2], "correl": 1, "dye": 1, "thionin": 1, "intercal": 1, "calf": 1, "thymu": 1, "dna": [1, 3], "treat": 1, "protein": [1, 3], "effect": 1, "amount": 1, "arbitrari": 1, "unit": 1, "intens": 1, "lclllllll": 1, "64": 1, "71": 1, "control": 1, "88": 1, "60": 1, "92": 1, "87": 1, "seem": 1, "too": 1, "trend": 1, "exhibit": 1, "temptat": 1, "must": 1, "resist": 1, "famou": 1, "consequ": [1, 2, 3], "led": 1, "hole": 1, "antarct": 1, "ozon": 1, "layer": 1, "miss": 1, "scientist": 1, "march": 1, "1988": 1, "unexpect": 1, "year": [1, 3], "analyz": 1, "thrown": 1, "out": [1, 3], "growth": 1, "rememb": [1, 2], "ad": [1, 3], "ones": 1, "smooth": 1, "akin": 1, "avoid": 1, "clinic": 1, "ever": [1, 2], "disregard": 1, "outli": 1, "obviou": 1, "transcript": 1, "simpl": [1, 3], "wrong": [1, 2], "solvent": 1, "mistak": 1, "concentr": 1, "amplifi": 1, "forth": 1, "everyth": 1, "satisfactorili": 1, "highli": 1, "imposs": 1, "cannot": [1, 2], "dealt": 1, "absolut": 1, "integ": 1, "prob": 1, "choos": 1, "abov": 1, "89": 1, "sound": 1, "ignor": 1, "them": 1, "altern": 1, "reject": 1, "2n": 1, "well": 1, "dataset": 1, "120": 1, "110": 1, "105": 1, "108": 1, "83": 1, "101": 1, "largest": 1, "78": 1, "078": 1, "retain": 1, "algebra": 1, "bigg": 1, "_a": 1, "below": 1, "130": 1, "posit": [1, 3], "indx": 1, "len": 1, "xbar": 1, "x0": 1, "ab": 1, "3f": 1, "std": 1, "dev": 1, "3g": 1, "000": 1, "907": 1, "0778": 1, "050": 1, "undergradu": [1, 3], "question": [1, 3], "aris": 1, "undoubtedli": 1, "absenc": 1, "knowledg": 1, "appeal": 1, "sigma_k": 1, "energi": 1, "tran": 1, "gauch": 1, "butan": 1, "accord": 1, "proport": 1, "emiss": 1, "spectrum": 1, "vari": 1, "wavelength": 1, "twice": 1, "resolut": 1, "experimentalist": [1, 2], "better": [1, 2], "nevertheless": 1, "2x_1": 1, "w_i": 1, "limits_i": 1, "w_ix_i": 1, "contribut": 1, "unweight": 1, "guis": 1, "limits_iw_i": 1, "optim": 1, "reciproc": 1, "sigma_i": 1, "sum_ix_i": 1, "19": 1, "ensur": 1, "_2": 1, "infrar": 1, "550": 1, "cm": 1, "555": 1, "552": 1, "while": 1, "554": 1, "higher": 1, "anticip": 1, "three": 1, "rate": 1, "03": 1, "02": 1, "combin": 1, "15_2": 1, "014": 1, "wavenumb": 1, "millivolt": 1, "difficult": 1, "arriv": 1, "detector": 1, "mu_i": 1, "th": 1, "fluorimet": 1, "phosphoresc": 1, "spectra": 1, "situat": 1, "further": [1, 2], "associ": [1, 2], "exponenti": 1, "multipli": 1, "expand": 1, "taylor": 1, "seri": [1, 2], "substitut": 1, "bevington": 1, "robinson": 1, "2003": 1, "proof": 1, "f": 1, "sigma_u": 1, "sigma_v": 1, "partial": 1, "_v": 1, "_u": 1, "sigma_": 1, "uv": 1, "covari": 1, "influenc": 1, "extra": [1, 3], "_": 1, "sigma_w": 1, "nrt": 1, "temperatur": 1, "mole": 1, "deriv": 1, "sigma_p": 1, "sigma_n": 1, "sigma_t": 1, "rt": 1, "nr": 1, "simplifi": 1, "fraction": 1, "simpler": 1, "torr": 1, "organ": 1, "liquid": 1, "ln": 1, "mt": 1, "log": 1, "vs": 1, "gradient": 1, "5390": 1, "intercept": 1, "099": 1, "boil": [1, 2], "760": 1, "atm": 1, "rearrang": 1, "29": 1, "remind": 1, "dimensionless": 1, "sigma_c": 1, "complet": [1, 3], "sm": 1, "sc": 1, "st": 1, "sigtsqrd": 1, "diff": 1, "sigt": 1, "sub": 1, "evalf": 1, "unusu": 1, "caus": [1, 2], "great": 1, "sensit": 1, "frequent": 1, "met": 1, "befor": 1, "\u03c3": 1, "u_i": 1, "ll": 1, "mx": 1, "sigma_x": 1, "nx": 1, "sin": 1, "co": 1, "ue": 1, "immedi": 1, "offer": 1, "advantag": 1, "becom": 1, "clearer": 1, "complex": 1, "gv_": 1, "2g": 1, "v_": 1, "jacobian": 1, "row": 1, "bmatrix": 1, "our": 1, "assumpt": 1, "theta": 1, "depend": 1, "event": 1, "product": 1, "prod_": 1, "togeth": 1, "mathemat": [1, 3], "easier": 1, "align": 1, "anywai": 1, "wrt": 1, "infrequ": 1, "The": [2, 3], "contend": 2, "some": [2, 3], "method": [2, 3], "discuss": 2, "onc": 2, "mean": 2, "experiment": [2, 3], "measur": 2, "precis": 2, "accuraci": 2, "comparison": 2, "publish": [2, 3], "standard": 2, "poor": 2, "careless": 2, "i": [2, 3], "blunder": 2, "entir": 2, "unpredict": 2, "These": 2, "distribut": 2, "from": [2, 3], "freez": 2, "water": 2, "ex": 2, "ampl": 2, "averag": 2, "accur": 2, "someth": 2, "hand": 2, "care": 2, "worst": 2, "imprecis": 2, "inaccur": 2, "exact": 2, "fact": 2, "someon": 2, "report": 2, "suspici": 2, "normal": 2, "suspicion": 2, "correct": [2, 3], "obvious": 2, "deviat": 2, "confid": 2, "limit": 2, "construct": [2, 3], "feel": 2, "book": 3, "version": 3, "oup": 3, "2009": 3, "aim": 3, "graduat": 3, "student": 3, "topic": 3, "potenti": 3, "live": 3, "code": 3, "graphic": 3, "jupyt": 3, "notebook": 3, "packag": 3, "free": 3, "gift": 3, "anyon": 3, "interest": 3, "engin": 3, "includ": 3, "copi": 3, "via": 3, "rocket": 3, "icon": 3, "contain": 3, "necessarili": 3, "effici": 3, "gain": 3, "understand": 3, "redrawn": 3, "fourier": 3, "infra": 3, "spectromet": 3, "ftir": 3, "flow": 3, "polymeras": 3, "chain": 3, "reaction": 3, "pcr": 3, "elut": 3, "peak": 3, "chromatographi": 3, "transient": 3, "grate": 3, "techniqu": 3, "molecular": 3, "beam": 3, "hilbert": 3, "2d": 3, "rai": 3, "diffract": 3, "tomographi": 3, "radon": 3, "fulli": 3, "godfrei": 3, "beddard": 3, "emeritu": 3, "professor": 3, "chemistri": 3, "univers": 3, "leed": 3, "visit": 3, "edinburgh": 3, "he": 3, "taught": 3, "over": 3, "hi": 3, "research": 3, "femtosecond": 3, "spectroscopi": 3, "time": 3, "resolv": 3, "crystallographi": 3, "textbook": 3, "primarili": 3, "intend": 3, "postgradu": 3, "elementari": 3, "part": 3, "particular": 3, "emphasi": 3, "hydrogen": 3, "thank": 3, "dr": 3, "david": 3, "salt": 3, "rip": 3, "critic": 3, "comment": 3, "earli": 3, "draft": 3, "fogarti": 3, "data": 3, "marcelo": 3, "miranda": 3, "gavin": 3, "reid": 3, "brioni": 3, "york": 3, "tom": 3, "help": 3, "compil": 3, "web": 3, "paper": 3, "diagram": 3, "whom": 3, "tri": 3, "my": 3, "who": 3, "receiv": 3, "attent": 3, "due": 3, "dedic": 3, "contact": 3, "me": 3, "subblu": 3, "com": 3, "licens": 3, "creativ": 3, "attribut": 3, "noderiv": 3, "unport": 3, "2iv24": 3, "instruct": 3, "matric": 3, "continu": 3, "line": 3, "present": 3, "mathjax": 3, "space": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"dato": 0, "pr\u00e1ctica": 0, "electricidad": 0, "i": [0, 1], "2024": 0, "05": 0, "10": 0, "1": 1, "character": 1, "experiment": 1, "data": [1, 2], "accuraci": 1, "precis": 1, "mean": 1, "standard": 1, "deviat": 1, "The": 1, "averag": 1, "valu": 1, "2": 1, "sampl": 1, "parent": 1, "popul": 1, "varianc": 1, "3": 1, "central": 1, "limit": 1, "theorem": 1, "confid": 1, "interv": 1, "tabl": 1, "sigma": 1, "s": 1, "normal": 1, "distribut": 1, "estim": 1, "k": 1, "content": 1, "glass": 1, "small": 1, "student": 1, "t": 1, "ii": 1, "respons": 1, "time": 1, "critic": 1, "from": 1, "cumul": 1, "4": 1, "hypothesi": 1, "test": 1, "5": 1, "comparison": 1, "two": 1, "iii": 1, "compar": 1, "column": 1, "yield": 1, "chromatographi": 1, "iv": 1, "fluoresc": 1, "6": 1, "chebychev": 1, "rule": 1, "chauvenet": 1, "criterion": 1, "outlier": 1, "7": 1, "singl": 1, "measur": 1, "8": 1, "weight": 1, "v": 1, "spectral": 1, "line": 1, "error": 1, "propag": 1, "vi": 1, "ga": 1, "law": 1, "vii": 1, "vapour": 1, "pressur": 1, "viii": 1, "continu": 1, "some": 1, "formula": 1, "matrix": 1, "formul": 1, "maximum": 1, "likelihood": 1, "method": 1, "paramet": 1, "13": 2, "analysi": 2, "appli": 3, "math": 3, "chemic": 3, "biomolecular": 3, "scienc": 3, "prefac": 3, "origin": 3, "edit": 3, "acknowledg": 3, "licenc": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})