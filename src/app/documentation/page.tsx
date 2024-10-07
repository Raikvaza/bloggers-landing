import IconArrow from "@/shared/assets/icons/icon_arrow-r.svg";
import LogoInBoost from "@/shared/assets/icons/logo_in_boost.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/shared/ui/Breadcrumb";
import { Typography } from "@/shared/ui/Typography";

import { ContentFooter } from "../_sections/ContentFooter";

export default function DocumentationPage() {
  return (
    <div className="relative min-h-screen bg-white p-8 pb-0 text-[#171719]">
      <div className="flex w-full flex-col items-center  justify-center md:mb-[80px]">
        <div className="flex items-stretch justify-start gap-[2px]">
          <LogoInBoost />
          <Typography className="!!font-extrabold self-center !text-center !text-[26px]">
            In
            <span className="text-[26px] !font-extrabold text-purple-500">
              BOOST
            </span>
          </Typography>
        </div>
        <Typography variant={"bodyM"} className="mb-10 text-center md:mb-0">
          Уникальное приложение по поиску сотрудничества
        </Typography>
      </div>
      <div className=" mx-auto flex justify-start md:w-[1120px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild href="/">
                <Typography
                  variant={"bodyM"}
                  className="text-[#171719E0] hover:cursor-pointer hover:text-[#6C4DFF]"
                >
                  Главная
                </Typography>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="max-h-6 min-h-6 min-w-6 max-w-6">
              <IconArrow />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <Typography variant={"bodyM"} className="text-[#171719E0]">
                Документация
              </Typography>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container mx-auto grow pt-[52px] md:w-[1120px]">
        <div className="flex flex-col gap-3">
          <Typography variant={"headline2"} className="mb-4 md:mb-10">
            Соглашение на обработку персональных данных
          </Typography>
          <Typography variant={"bodyM"}>
            Настоящая политика конфиденциальности и обработки персональных
            данных (далее по тексту – «Политика») регулирует порядок обработки
            и использования персональных и иных данных пользователей приложения,
            принадлежащего ТОО [пожалуйста, укажите наименование] (далее
            по тексту — «Оператор»). Действующая редакция настоящей Политики
            конфиденциальности, постоянно доступна для ознакомления, и размещена
            в сети Интернет по адресу: [пожалуйста, укажите] (далее по тексту –
            «Приложение»).Передавая Оператору персональные и иные данные
            посредством приложения, Пользователь подтверждает своё согласие
            на использование указанных данных на условиях, изложенных
            в настоящей Политике (в том числе на трансграничную передачу
            персональных данных).Если Пользователь не согласен с условиями
            настоящей Политики, он обязан прекратить использование приложение.
            Дальнейшее использование Пользователем настоящего приложения
            означает его согласие с условиями, изложенными в настоящей Политике.
            Безусловным акцептом настоящей Политики является начало
            использования приложения Пользователем.
          </Typography>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <Typography variant={"caption2"} className="!font-extrabold">
                  1.
                </Typography>
                <Typography variant={"caption2"} className="!font-extrabold">
                  Термины и определения
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <SectionOneContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <Typography variant={"caption2"} className="!font-extrabold">
                  2.
                </Typography>
                <Typography variant={"caption2"} className="!font-extrabold">
                  Сбор и обработка персональных данных
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <SectionTwoContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <Typography variant={"caption2"} className="!font-extrabold">
                  3.
                </Typography>
                <Typography variant={"caption2"} className="!font-extrabold">
                  Порядок обработки персональных данных
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <SectionThreeContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <Typography variant={"caption2"} className="!font-extrabold">
                  4.
                </Typography>
                <Typography variant={"caption2"} className="!font-extrabold">
                  Защита персональных данных
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <SectionFourContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b-0">
              <AccordionTrigger>
                <Typography variant={"caption2"} className="!font-extrabold">
                  5.
                </Typography>
                <Typography variant={"caption2"} className="!font-extrabold">
                  Иные положения
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <SectionFiveContent />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="-mx-8 mt-10 flex w-[100dvw] flex-col items-center justify-center gap-4 pb-10 md:mx-auto md:mt-[131px] md:h-[120px] md:w-[1120px] md:flex-row md:justify-start md:gap-0">
        <div className="flex w-full items-center justify-between px-8">
          <Typography className="text-center text-[26px] font-extrabold">
            In
            <span className="text-[26px] font-extrabold text-purple-500">
              BOOST
            </span>
          </Typography>
          <Typography
            variant={"caption2"}
            className="whitespace-nowrap md:ml-[163px]"
          >
            +7 700 000 99 00
          </Typography>
        </div>
        <Typography variant={"caption2"} className="md:ml-[110px]">
          inboost@kz
        </Typography>
        <div className="flex items-center justify-start gap-4 md:ml-[79px]">
          <Typography variant={"bodyL"}>Instagram</Typography>
          <Typography variant={"bodyL"}>Telegram</Typography>
          <Typography variant={"bodyL"}>Whatsapp</Typography>
        </div>
      </div>
    </div>
  );
}

const SectionOneContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch gap-3">
      <Typography variant={"bodyM"}>
        1.1. В Политике используются следующие термины и определения:
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          1.1.1. Приложение —{" "}
        </Typography>
        мобильное приложение, расположенное в сети Интернет. Все исключительные
        права на приложение и его отдельные элементы (включая программное
        обеспечение, дизайн) принадлежат Оператору в полном объёме. Передача
        исключительных прав Пользователю не является предметом настоящей
        Политики.
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          1.1.2. Пользователь —{" "}
        </Typography>
        лицо, использующее приложение.
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          1.1.3. Законодательство —{" "}
        </Typography>
        действующее законодательство Республики Казахстан.
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          1.1.4. Персональные данные —{" "}
        </Typography>
        персональные данные Пользователя, которые Пользователь предоставляет
        самостоятельно при регистрации или в процессе использования функционала
        приложения.
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          1.1.5. Данные —{" "}
        </Typography>
        иные данные о Пользователе (не входящие в понятие Персональных данных).
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          1.1.6. Регистрация —{" "}
        </Typography>
        создание Пользователем личного кабинета и заполнение необходимой
        информации.
      </Typography>
    </div>
  );
};

const SectionTwoContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch gap-3">
      <Typography variant={"bodyM"}>
        2.1. Оператор собирает и хранит только те Персональные данные, которые
        необходимы для оказания (продвижения) услуг и/или товаров и
        взаимодействия с Пользователем.
      </Typography>

      <Typography variant={"bodyM"}>
        2.2. Персональные данные могут использоваться в следующих целях:
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.2.1.{" "}
        </Typography>
        оказание услуг Пользователю и получение услуг Пользователем;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.2.2.{" "}
        </Typography>
        идентификация Пользователя;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.2.3.{" "}
        </Typography>
        взаимодействие с Пользователем;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.2.4.{" "}
        </Typography>
        направление Пользователю рекламных материалов, информации и запросов;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.2.5.{" "}
        </Typography>
        проведение статистических и иных исследований;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.2.6.{" "}
        </Typography>
        регистрации Пользователя в приложении и учёта его заказов/запросов;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.2.7.{" "}
        </Typography>
        продвижения услуг и/или товаров Пользователя и/или третьих лиц;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.2.8.{" "}
        </Typography>
        в иных целях, не противоречащих Законодательству.
      </Typography>

      <Typography variant={"bodyM"}>
        2.3. Оператор в том числе обрабатывает следующие данные:
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.3.1.{" "}
        </Typography>
        фамилия, имя и отчество;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.3.2.{" "}
        </Typography>
        пол;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.3.3.{" "}
        </Typography>
        адрес электронной почты;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          2.3.4.{" "}
        </Typography>
        номер телефона (в т. ч. мобильного);
      </Typography>

      <Typography variant={"bodyM"}>
        2.4. Пользователю запрещается указывать в приложении персональные данные
        третьих лиц (за исключением условия представления интересов этих лиц,
        имея документальное подтверждение третьих лиц на осуществление таких
        действий).
      </Typography>
    </div>
  );
};

const SectionThreeContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch gap-3">
      <Typography variant={"bodyM"}>
        3.1. Оператор обязуется использовать Персональные данные в соответствии
        с Законом «О персональных данных» Республики Казахстан, Политикой и
        внутренними документами Оператора.
      </Typography>

      <Typography variant={"bodyM"}>
        3.2. В отношении Персональных данных и иных Данных Пользователя
        сохраняется их конфиденциальность, кроме случаев, когда указанные данные
        являются общедоступными.
      </Typography>

      <Typography variant={"bodyM"}>
        3.3. Оператор имеет право сохранять архивную копию Персональных данных.
      </Typography>

      <Typography>
        3.4. Оператор имеет право передавать Персональные данные и Данные
        Пользователя без согласия Пользователя следующим лицам:
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          3.4.1.{" "}
        </Typography>
        государственным органам, в том числе органам дознания и следствия, и
        органам местного самоуправления по их мотивированному запросу;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          3.4.2.{" "}
        </Typography>
        в иных случаях, прямо предусмотренных действующим законодательством
        Республики Казахстан.
      </Typography>

      <Typography variant={"bodyM"}>
        3.5. Оператор имеет право передавать Персональные данные и Данные
        третьим лицам, не указанным в пункте 3.4. Политики, в следующих случаях:
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          3.5.1.{" "}
        </Typography>
        Пользователь выразил своё согласие на такие действия. При этом, согласие
        Пользователя на такие действия считается предоставленным Оператору с
        момента начала использования Пользователем приложения;
      </Typography>

      <Typography>
        <Typography as="span" variant={"bodyM"}>
          3.5.2.{" "}
        </Typography>
        передача необходима в рамках использования Пользователем приложения или
        для оказания (продвижения) услуг и/или товаров;
      </Typography>

      <Typography variant={"bodyM"}>
        3.6. Оператор осуществляет автоматизированную обработку Персональных
        данных.
      </Typography>
    </div>
  );
};
const SectionFourContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch gap-3">
      <Typography variant={"bodyM"}>
        4.1. Оператор осуществляет надлежащую защиту Персональных и иных данных
        в соответствии с Законодательством и принимает необходимые и достаточные
        организационные и технические меры для защиты Персональных данных.
      </Typography>

      <Typography variant={"bodyM"}>
        4.2. Применяемые меры защиты в том числе позволяют защитить Персональные
        данные от неправомерного или случайного доступа, уничтожения, изменения,
        блокирования, копирования, распространения, а также от иных
        неправомерных действий с ними третьих лиц.
      </Typography>
    </div>
  );
};
const SectionFiveContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch gap-3">
      <Typography variant={"bodyM"}>
        5.1. К Политике и отношениям между Пользователем и Оператором,
        возникающим в связи с применением Политики, подлежит применению право
        Республики Казахстан.
      </Typography>

      <Typography variant={"bodyM"}>
        5.2. Все возможные споры, вытекающие из настоящей Политики, подлежат
        разрешению в соответствии с Законодательством по месту регистрации
        Оператора.
      </Typography>

      <Typography variant={"bodyM"}>
        5.3. Перед обращением в суд Пользователь должен соблюсти обязательный
        досудебный порядок и направить Оператору соответствующую претензию в
        письменном виде. Срок ответа на претензию составляет 30 (тридцать)
        рабочих дней.
      </Typography>

      <Typography variant={"bodyM"}>
        5.4. Если по тем или иным причинам одно или несколько положений Политики
        будут признаны недействительными или не имеющими юридической силы, это
        не оказывает влияния на действительность или применимость остальных
        положений Политики.
      </Typography>

      <Typography variant={"bodyM"}>
        5.5. Оператор имеет право в любой момент изменять Политику
        конфиденциальности (полностью или в части) в одностороннем порядке без
        предварительного согласования с Пользователем. Все изменения вступают в
        силу с момента их размещения в приложении.
      </Typography>

      <Typography variant={"bodyM"}>
        5.6. Пользователь обязуется самостоятельно следить за изменениями
        Политики конфиденциальности путём ознакомления с её актуальной
        редакцией.
      </Typography>
    </div>
  );
};
